import "./userNotes.css";
import React, { useContext } from "react";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import UserNotesFeed from "../../components/userNotesFeed/UserNotesFeed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

function UserNotes() {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const resUser = await axios.get(`${FETCH}users?username=${username}`);
      setUser(resUser.data);
      const resNotes = await axios.get(
        `${FETCH}notes/profile/${currentUser.username}`,
        {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        }
      );
      setNotes(resNotes.data);
    };
    fetchUser();
  }, [username, FETCH]);

  return (
    <div>
      <Nav />
      <div className="userNotesContainer">
        <div className="userNotesTimeline">
          <UserProfileInfo user={user} />
          <UserNotesFeed notes={notes} user={user} />
        </div>
        <RightBar profile />
      </div>
    </div>
  );
}

export default UserNotes;
