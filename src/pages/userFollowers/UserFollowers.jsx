import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import "./userFollowers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const UserFollowers = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log("USEPARAMS:", username);

  const fetchUser = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}users?username=${username}`);
    setUser(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [username, FETCH]);

  console.log("ELİMDEKİ USER", user);
  return (
    <>
      <Nav />
      <div className="userFollowersContainer">
        <div className="userFollowersTimeline">
          

          {isLoading ? <LoadingComp/> :<UserProfileInfo user={user} />}
          {isLoading ? <LoadingComp/> : <UserFollowersFeed user={user} />}
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowers;
