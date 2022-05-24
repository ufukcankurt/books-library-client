import "./userShelf.css"
import Nav from "../../components/nav/Nav"
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo"
import RightBar from "../../components/rightBar/RightBar"
import UserShelfFeed from "../../components/userShelfFeed/UserShelfFeed"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const UserShelf = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH 
  const  {username,shelfId}  = useParams();
  const [user, setUser] = useState({});

  console.log("USEPARAMS:", username);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${FETCH}users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username, FETCH]);

  console.log("ELİMDEKİ USER", user);
  return (
    <>
    <Nav />
    <div className="userShelfContainer">
      <div className="userShelfTimeline">
        <UserProfileInfo  user={user}/>
        <UserShelfFeed user={user} shelfName={shelfId}/>
      </div>
      <RightBar profile />
    </div>
  </>
  )
}

export default UserShelf