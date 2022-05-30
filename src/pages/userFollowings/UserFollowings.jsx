import "./userFollowings.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const UserFollowings = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH 
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `${FETCH}users?username=${username}`
    );
    setUser(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  return (
    <>
      <Nav />
      <div className="userFollowingsContainer">
        <div className="userFollowingsTimeline">
          {isLoading ? <LoadingComp /> : <UserProfileInfo user={user} />}
          {isLoading ? <LoadingComp /> : <UserFollowersFeed user={user} followings />}
          
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowings;
