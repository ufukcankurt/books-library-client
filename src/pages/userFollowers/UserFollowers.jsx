import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import "./userFollowers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserFollowers = () => {
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
      <div className="userFollowersContainer">
        <div className="userFollowersTimeline">
          <UserProfileInfo user={user}/>
            
          <UserFollowersFeed user={user}  />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowers;
