import "./profile.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
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
    <div>
      <Nav />
      <div className="profileContainer">
        <div className="profileTimeline">
          <UserProfileInfo user={user} />
          <Feed user={user} />
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default Profile;
