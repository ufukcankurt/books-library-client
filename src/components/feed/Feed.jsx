import Post from "../post/Post";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const Feed = ({ user }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${FETCH}posts/timeline/${currentUser._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [FETCH, currentUser._id]);

  return (
    <div className="FeedContainer">
      {posts?.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
