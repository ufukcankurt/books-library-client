import "./userNotesFeed.css";
import React from "react";
import UserNoteOne from "../userNoteOne/UserNoteOne";

function UserNoteFeed() {
  return (
    <div className="userNoteFeedContainer">
      <h2 className="userNoteFeedTitle">Notları</h2>
      <UserNoteOne/>
      <UserNoteOne/>
      <UserNoteOne/>
      <UserNoteOne/>
      <UserNoteOne/>
      <UserNoteOne/>
    </div>
  );
}

export default UserNoteFeed;
