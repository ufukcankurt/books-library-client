import "./postDetail.css";

import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import Post from "../../components/post/Post";


const PostDetail = () => {
  return (
    <div>
      <Nav />
      <div className="postDetailContainer">
        <div className="postDetailTimeline">
            <Post postDetail/>
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default PostDetail;
