import "./userShelf.css";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import RightBar from "../../components/rightBar/RightBar";
import UserShelfFeed from "../../components/userShelfFeed/UserShelfFeed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const UserShelf = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { username, shelfId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <div className="userShelfContainer">
        <div className="userShelfTimeline">
          {isLoading ? <LoadingComp /> : <UserProfileInfo user={user} />}
         
            <UserShelfFeed user={user} shelfName={shelfId} />
     
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserShelf;
