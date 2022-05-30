import Post from "../post/Post";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Share from "../../components/share/Share";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const Feed = ({ user }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isShare, setIsShare] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [FETCH, currentUser._id, isShare, user]);

  window.addEventListener('load', (event) => {
    setIsRender(true);
  });

  return (
    <>
    <div className="FeedContainer">
    {isLoading && <LoadingComp /> }
      {user ? "" : <Share isShare={isShare} setIsShare={setIsShare} />}


      {posts?.map((post, i) => (
        <Post key={post._id} post={post} />
        ))}

        {posts?.length === 0 && isRender === true ? <p className="feedWarning">Henüz bir post paylaşılmamış!</p> : ""}
    </div>
    </>
  );
};

export default Feed;
