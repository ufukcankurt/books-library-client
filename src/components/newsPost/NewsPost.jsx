import { Link } from "react-router-dom";
import "./newsPost.css";

const NewsPost = ({ single, news }) => {
  const SinglePost = () => {
    return <p className="newsPostSingleText">{news.desc}</p>;
  };

  const AllPost = () => {
    return (
      <>
        <p className="newsPostText">{news.desc}</p>
      </>
    );
  };

  const SinglePostMid = () => {
    return (
      <>
        <div className="newsPostMid">
          <img src={news.img} alt="" />
        </div>
      </>
    );
  };

  const AllPostMid = () => {
    return (
      <>
        <Link
          to={`/news/${news._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="newsPostMid">
            <img src={news.img} alt="" />
          </div>
        </Link>
      </>
    );
  };

  const SinglePostTop = () => {
    return (
      <>
        <p className="newsPostTitle">{news.title}</p>
      </>
    );
  };

  const AllPostTop = () => {
    return (
      <>
        <Link
          to={`/news/${news._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p className="newsPostTitle">{news.title}</p>
        </Link>
      </>
    );
  };

  return (
    <div className="newsPostContainer">
      <div className="newsPostTopside">
        {single ? <SinglePostTop /> : <AllPostTop />}
        <p className="newsPostTimeago">{news.updatedAt?.split("T")[0]}</p>
      </div>
      {single ? <SinglePostMid /> : <AllPostMid />}
      <div className="newsPostBottom">
        {single ? <SinglePost /> : <AllPost />}
      </div>
    </div>
  );
};

export default NewsPost;
