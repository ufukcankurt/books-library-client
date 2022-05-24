import "./userBooks.css";
import Nav from "../../components/nav/Nav";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import RightBar from "../../components/rightBar/RightBar";
import BooksFeed from "../../components/booksFeed/BooksFeed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserBooks = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const FETCH = process.env.REACT_APP_FETCH_PATH;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${FETCH}users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username, FETCH]);

  return (
    <>
      <Nav />
      <div className="userBooksContainer">
        <div className="userBooksTimeline">
          <UserProfileInfo user={user} />
          <BooksFeed user={user} />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserBooks;
