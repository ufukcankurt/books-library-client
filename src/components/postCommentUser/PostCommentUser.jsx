import "./postCommentUser.css"
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import TimeAgo from "timeago-react";
import tr from "timeago.js/lib/lang/tr";
import * as timeago from "timeago.js";
import { HoverActions } from "../post/Post";

const PostCommentUser = ({ comment, post, setPost, setIsVisible, setMessage }) => {

    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const { user: currentUser } = useContext(AuthContext);
    timeago.register("tr", tr);

    const handleRemoveComment = async (e) => {
        e.preventDefault()
        const res = await axios.delete(`${FETCH}comments/${comment.comment._id}`, {
            headers: {
                token: `Bearer ${currentUser.accessToken}`,
            }
        })
        res.status === 200 && setIsVisible(true)
        res.status === 200 && setMessage("Yorum başarılı bir şekilde kaldırıldı!")
        res.status === 200 && setPost({ ...post, comments: post.comments.filter(c => c.comment._id !== comment.comment._id) })
    }

    return (
        <div className="postCommentUserContainer">
            <Link to={`/${comment.user.username}`}>
                <div className="postCommentUserImg">
                    <img src={comment.user.profilePicture} alt="" />
                </div>
            </Link>
            <div className="postCommentUserDetailContent">
                <Link to={`/${comment.user.username}`}>
                    <div className="postCommentUserDetail">
                        <p className="postCommentUserFullname">{comment.user.fullname}</p>
                        <p className="postCommentUsername">@{comment.user.username}</p>
                        <p className="postCommentTimeAgo">▪ <TimeAgo datetime={comment.comment.createdAt} locale="tr" /></p>
                    </div>
                </Link>
                <div className="postCommentUserText">
                    <p className="postCommentUserTextDetail">{comment.comment.desc}</p>
                </div>
            </div>
            {((currentUser._id === comment.comment.userId) || (post.user._id === currentUser._id)) &&
                <div className="postCommentUserRemove" onClick={handleRemoveComment}>
                    <DeleteIcon />
                    <HoverActions text="Yorumu Sil" />
                </div>
            }
        </div >
    )
}

export default PostCommentUser
