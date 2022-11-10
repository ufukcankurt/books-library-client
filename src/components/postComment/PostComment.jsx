import "./postComment.css"
import React, { useState, useContext } from 'react'
import { AuthContext } from "../../context/authContext/AuthContext";
import PostCommentUser from "../postCommentUser/PostCommentUser"
import axios from "axios"
import MyAlertComp from "../myAlertComp/MyAlertComp";

const PostComment = ({ post, setPost }) => {
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const { user: currentUser } = useContext(AuthContext);

    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState(false);
    const [input, setInput] = useState("")

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
            setInput("")
            setIsVisible(true)
            setMessage("Yorum başarılı bir şekilde paylaşıldı!")
        }

    }

    return (
        <div className='postCommentContainer'>
            {isVisible === true && (
                <MyAlertComp
                    message={message}
                    setIsVisible={setIsVisible}
                    setIsError={false}
                />
            )}
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
                post.comments?.map((comment) => <PostCommentUser setIsVisible={setIsVisible} setMessage={setMessage} key={comment.comment._id} setPost={setPost} comment={comment} post={post} />)
            }
        </div>
    )
}

export default PostComment
