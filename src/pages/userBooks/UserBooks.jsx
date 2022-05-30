import "./userBooks.css";
import Nav from "../../components/nav/Nav";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import RightBar from "../../components/rightBar/RightBar";
import BooksFeed from "../../components/booksFeed/BooksFeed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const UserBooks = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const FETCH = process.env.REACT_APP_FETCH_PATH;
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
      <Nav />
      <div className="userBooksContainer">
        <div className="userBooksTimeline">
          {isLoading ? <LoadingComp /> : <UserProfileInfo user={user} />}
          {isLoading ? <LoadingComp /> : <BooksFeed user={user} />}
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserBooks;
