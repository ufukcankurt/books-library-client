import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <>
      <Link to="/post/123" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="PostContainer">
          <div className="postTopside">
            <div className="postUserInfo">
              <Link
                to="/ufukcankurt"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <img src="/assets/profile.jpg" alt="" className="postUserImg" />
              </Link>
              <div className="postUserNames">
                <Link
                  to="/ufukcankurt"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <p className="postUserFullname">Ufuk Can Kurt</p>
                  <p className="postUserUsername">@ufukcankurt</p>
                </Link>
              </div>
              <p className="postTimeago">▪ 30d </p>
            </div>
            <div className="postStatus">Bir kitabı okumaya başladı.</div>
          </div>
          <Link
            to="/book/123"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="postBookContainer">
              <div className="postBookImgDiv">
                <img
                  src="/assets/books/bulbulu_oldurmek.jpg"
                  alt=""
                  className="postBookImg"
                />
              </div>

              <div className="postBookInfo">
                <p className="postBookName">Bülbülü Öldürmek</p>
                <p className="postBookAuthor">Harper Lee</p>
                <p className="postBookPages">360 Sayfa</p>
              </div>
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};

export default Post;
