import "./postDetail.css";

import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import Post from "../../components/post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import LoadingComp from "../../components/loadingComp/LoadingComp";

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
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [FETCH, currentUser._id]);

  return (
    <div>
      <Nav />
      <div className="postDetailContainer">
        <div className="postDetailTimeline">
          {isLoading ? <LoadingComp /> : <Post post={post} postDetail />}
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default PostDetail;
