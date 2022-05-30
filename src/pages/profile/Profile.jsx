import "./profile.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const Profile = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}users?username=${username}`);
    setUser(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchUser();
  }, [username, FETCH]);

  useEffect(() => {
    document.title = `${user.fullname}'s Profile`;
  }, [user]);

  const MainComp = () => {
    return (
      <>
        <UserProfileInfo user={user} />
        <Feed user={user} />
      </>
    );
  };

  return (
    <div>
      <Nav />
      <div className="profileContainer">
        <div className="profileTimeline">
          {isLoading ? <LoadingComp /> : <MainComp />}
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default Profile;
