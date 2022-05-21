import "./userFollowings.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserFollowings = () => {

  const  {username}  = useParams();
  const [user, setUser] = useState({});

  console.log("USEPARAMS:", username);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8000/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  console.log("ELİMDEKİ USER", user);
  
  return (
    <>
      <Nav />
      <div className="userFollowingsContainer">
        <div className="userFollowingsTimeline">
          <UserProfileInfo user={user}/>
          <UserFollowersFeed user={user} followings />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowings;
