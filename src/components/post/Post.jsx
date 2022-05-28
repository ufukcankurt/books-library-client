import "./post.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import TimeAgo from "timeago-react";
import tr from "timeago.js/lib/lang/tr";
import * as timeago from "timeago.js";

const Post = ({ postDetail, post }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [book, setBook] = useState({});
  timeago.register("tr", tr);

  useEffect(() => {
    const getDatas = async () => {
      if (post.type === "post") {
        const resUser = await axios.get(`${FETCH}users?userId=${post.userId}`);
        setUser(resUser.data);
      } else {
        const resUser = await axios.get(`${FETCH}users?userId=${post.userId}`);
        setUser(resUser.data);

        const resBook = await axios.get(`${FETCH}books/${post.bookId}`, {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        });
        setBook(resBook.data);
      }
    };
    getDatas();
  }, [post]);

  const TimelineAllPost = () => {
    return <p className="postBookTextTimeline">{post.desc}</p>;
  };

  const SinglePostDetailSeeAllComp = () => {
    return (
      <>
        <Link to={``}>
          <div className="singlePostDetailSeeAll">
            <p>Tüm notu gör.</p>
          </div>
        </Link>
      </>
    );
  };

  const SinglePostDetail = () => {
    return (
      <>
        <p className="postBookTextSingle">{post.desc}</p>
      </>
    );
  };

  const TypeBookInfoComp = () => {
    return (
      <>
        {post.bookStatus === "unfinished" ? "Bir kitabı yarım bıraktı." : ""}
        {post.bookStatus === "finished" ? "Bir kitabı okudu." : ""}
        {post.bookStatus === "willread" ? "Bir kitabı okuyacak." : ""}
        {post.bookStatus === "reading" ? "Bir kitabı okuyor." : ""}
      </>
    );
  };

  const PostInfoComp = () => {
    return (
      <>{post.type === "book" ? <TypeBookInfoComp /> : <TypeQuoteInfoComp />}</>
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
            to={`/${user.username}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src={`${PF}users/${user.profilePicture}`}
              alt=""
              className="postUserImg"
            />
          </Link>
          <div className="postUserNames">
            <Link
              to="/ufukcankurt"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="postUserFullname">{user.fullname}</p>
              <p className="postUserUsername">@{user.username}</p>
            </Link>
          </div>
          <p className="postTimeago">
            ▪ <TimeAgo datetime={post.createdAt} locale="tr" />
          </p>
        </div>
        <div className="postStatus">
          {post.type === "post" ? "" : <PostInfoComp />}
        </div>
      </div>
    );
  };

  const MidSideComp = () => {
    return <>{postDetail ? <SinglePostDetail /> : <TimelineAllPost />}</>;
  };

  const BottomSideComp = () => {
    return (
      <>
        <Link
          to={`/book/${book._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="postBookContainer">
            <div className="postBookImgDiv">
              <img
                src={`${PF}books/${book.book_img}`}
                alt=""
                className="postBookImg"
              />
            </div>

            <div className="postBookInfo">
              <p className="postBookName">{book.book_name}</p>
              <p className="postBookAuthor">{book.book_author}</p>
              <p className="postBookPages">{book.book_page} Sayfa</p>
            </div>
          </div>
        </Link>
      </>
    );
  };

  return (
    <>
      <Link
        to={`/post/${post._id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div
          className="PostContainer"
          style={
            post.type === "post"
              ? { backgroundColor: "rgba(240, 248, 255, 0.4)" }
              : { backgroundColor: "inherit" }
              
          }
        >
          <PostTopsideComp />
          <MidSideComp />
          {post.type === "post" && !post.bookId ? "" : <BottomSideComp />}
        </div>
      </Link>
    </>
  );
};

export default Post;
