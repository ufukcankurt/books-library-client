import "./postDetail.css";

import RightBar from "../../components/rightBar/RightBar";
import Post from "../../components/post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import LoadingComp from "../../components/loadingComp/LoadingComp";
import PostComment from "../../components/postComment/PostComment";

const PostDetail = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}posts/${postId}`);
    setPost(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchPost();
  }, [FETCH, currentUser._id]);

  return (
    <div>
      <div className="postDetailContainer">
        <div className="postDetailTimeline">
          {isLoading ? <LoadingComp /> : <Post post={post} postDetail />}
          {!isLoading && <PostComment post={post} setPost={setPost} />}
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default PostDetail;
