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
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = user
          ? await axios.get(`${FETCH}posts/profile/getall/${user.username}`)
          : await axios.get(`${FETCH}posts/timeline/getall/${currentUser._id}`);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.post.createdAt) - new Date(p1.post.createdAt);
          })
        );
        setTimeout(() => {
          setIsRender(true);
        }, 1000);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [FETCH, currentUser._id, isShare, user]);

  return (
    <>
      <div className="FeedContainer">
        {user ? "" : <Share isShare={isShare} setIsShare={setIsShare} />}

        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}

        {posts?.length === 0 && isRender === true ? (
          <p className="feedWarning">Henüz bir post paylaşılmamış!</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Feed;
