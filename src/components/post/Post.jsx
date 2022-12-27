import "./post.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import TimeAgo from "timeago-react";
import tr from "timeago.js/lib/lang/tr";
import * as timeago from "timeago.js";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Post = ({ postDetail, post }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [book, setBook] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  timeago.register("tr", tr);

  useEffect(() => {
    post.post.likes.includes(currentUser._id) ? setIsLiked(true) : setIsLiked(false);
    setLikedCount(post.post.likes.length);
    setCommentCount(post.comments.length);
  }, [post, currentUser._id]);

  const likeHandler = async () => {
    try {
      await axios.put(`${FETCH}posts/like/${post.post._id}`, {}, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setIsLiked(!isLiked);
      setLikedCount(isLiked ? likedCount - 1 : likedCount + 1);

    } catch (err) {
      console.log(err);
    }
  }

  const dislikeHandler = async () => {
    try {
      await axios.put(`${FETCH}posts/dislike/${post.post._id}`, {}, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setIsLiked(!isLiked);
      setLikedCount(isLiked ? likedCount - 1 : likedCount + 1);
    } catch (err) {
      console.log(err);
    }
  }

  const TimelineAllPost = () => {
    return <p className="postBookTextTimeline">{post.post.desc}</p>;
  };

  const SinglePostDetail = () => {
    return (
      <>
        <p className="postBookTextSingle">{post.post.desc}</p>
      </>
    );
  };

  const TypeBookInfoComp = () => {
    return (
      <>
        {post.post.bookStatus === "unfinished" ? "Bir kitabı yarım bıraktı." : ""}
        {post.post.bookStatus === "finished" ? "Bir kitabı okudu." : ""}
        {post.post.bookStatus === "willread" ? "Bir kitabı okuyacak." : ""}
        {post.post.bookStatus === "reading" ? "Bir kitabı okuyor." : ""}
      </>
    );
  };

  const PostInfoComp = () => {
    return (
      <>{post.post.type === "book" ? <TypeBookInfoComp /> : <TypeQuoteInfoComp />}</>
    );
  };

  const TypeQuoteInfoComp = () => {
    return <>Bir not ekledi.</>;
  };

  const PostTopsideComp = () => {
    return (
      <div className="postTopside">
        <div className="postUserInfo">
          <Link
            to={`/${post.user.username}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src={post.user.profilePicture}
              alt=""
              className="postUserImg"
            />
          </Link>
          <div className="postUserNames">
            <Link
             to={`/${post.user.username}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="postUserFullname">{post.user.fullname}</p>
              <p className="postUserUsername">@{post.user.username}</p>
            </Link>
          </div>
          <p className="postTimeago">
            ▪ <TimeAgo datetime={post.post.createdAt} locale="tr" />
          </p>
        </div>
        <div className="postStatus">
          {post.post.type === "post" ? "" : <PostInfoComp />}
        </div>
      </div>
    );
  };

  const MidSideComp = () => {
    return <>{postDetail ? <SinglePostDetail /> : post.post.desc && <TimelineAllPost />}</>;
  };

  const BottomSideComp = () => {
    return (
      <>
        <Link
          to={`/book/${post.book._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="postBookContainer">
            <div className="postBookImgDiv">
              <img
                src={post.book.book_img}
                alt=""
                className="postBookImg"
              />
            </div>

            <div className="postBookInfo">
              <p className="postBookName">{post.book.book_name}</p>
              <p className="postBookAuthor">{post.book.book_author}</p>
              <p className="postBookPages">{post.book.book_page} Sayfa</p>
            </div>
          </div>
        </Link>
      </>
    );
  };



  const Actions = () => {
    return (
      <div className="postActionsContainer">
        {likedCount > 0 &&
          <span className="postActionInfo">{likedCount} beğeni</span>
        }
        <div className="postActions">

          {isLiked
            ? <div className="postIcon postIconLiked postLiked" onClick={dislikeHandler}>
              <FavoriteIcon />
              <HoverActions text="Beğenmekten Vazgeç" />
            </div>
            : <div className="postIcon postIconLiked" onClick={likeHandler}>
              <FavoriteBorderIcon />
              <HoverActions text="Beğen" />
            </div>}

          <Link to={`/post/${post.post._id}`}>
            <div className="postIcon postIconComment"><ChatBubbleOutlineOutlinedIcon /> <HoverActions text="Yorum Yap" /></div>
          </Link>

        </div>
        <Link to={`/post/${post.post._id}`}>
          {commentCount > 0 && !postDetail &&
            <span className="postActionInfo postActionInfoComment">{commentCount} yorumun tümünü gör</span>}
        </Link>
      </div>
    )
  }

  return (
    <>
      <div
        className="PostContainer"
        style={
          post.post.type === "post"
            ? { backgroundColor: "var(--bg)" }
            : { backgroundColor: "var(--bg)" }

        }
      >
        <Link
          to={`/post/${post.post._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <PostTopsideComp />
          <MidSideComp />
          {post.post.type === "post" && !post.post.bookId ? "" : <BottomSideComp />}
        </Link>
        <Actions />
      </div>
    </>
  );
};

export default Post;

export const HoverActions = ({ text }) => {
  return (
    <span className="hoverActionsText">
      {text}
    </span>
  )
}