import Post from "../post/Post";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Share from "../../components/share/Share";

const Feed = ({ user }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isShare, setIsShare] = useState(false);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = user
          ? await axios.get(`${FETCH}posts/profile/${user.username}`)
          : await axios.get(`${FETCH}posts/timeline/${currentUser._id}`);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [FETCH, currentUser._id, isShare, user]);

  return (
    <div className="FeedContainer">
      {user ? "" : <Share isShare={isShare} setIsShare={setIsShare} />}

      {posts?.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
