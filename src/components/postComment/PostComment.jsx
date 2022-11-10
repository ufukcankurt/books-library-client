import "./postComment.css"
import React, { useState, useContext } from 'react'
import { AuthContext } from "../../context/authContext/AuthContext";
import PostCommentUser from "../postCommentUser/PostCommentUser"
import axios from "axios"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostComment = ({ post, setPost }) => {
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const { user: currentUser } = useContext(AuthContext);
    const { postId } = useParams();

    const [input, setInput] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {

        const getComments = async () => {
            try {
                const res = await axios.get(`${FETCH}comments/${postId}`);
                setComments(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        if (postId) {
            getComments();
        }
    }, [postId, FETCH, currentUser])

    const handleComment = async (e) => {
        e.preventDefault()

        const newComment = input.trim();

        if (newComment.length > 0) {
            const res = await axios.post(`${FETCH}comments`, {
                postId: post.post._id,
                desc: newComment
            }, {
                headers: {
                    token: `Bearer ${currentUser.accessToken}`,
                }
            })
            const obj = {}
            obj.comment = res.data
            obj.user = currentUser
            setPost({ ...post, comments: [...post.comments, obj] })
            // setComments([...comments, obj])
            setInput("")
        }

    }

    return (
        <div className='postCommentContainer'>
            <div className='postCommentShare'>
                <div className="postCommentShareContent">
                    <div className="postCommentImg">
                        <img src={currentUser.profilePicture} alt="" />
                    </div>
                    <textarea placeholder="Bir yorum yazın..." className='postCommentInput' name="" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                </div>
                {input.length > 0 && <button className='postCommentButton' onClick={handleComment}>Paylaş</button>}
            </div>
            {
                post.comments?.map((comment) => <PostCommentUser key={comment.comment._id} setPost={setPost} comment={comment} post={post} />)
            }
        </div>
    )
}

export default PostComment
