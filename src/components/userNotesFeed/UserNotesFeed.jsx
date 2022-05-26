import "./userNotesFeed.css";
import React from "react";
import UserNoteOne from "../userNoteOne/UserNoteOne";

function UserNoteFeed({notes}) {
  return (
    <div className="userNoteFeedContainer">
      <h2 className="userNoteFeedTitle">Notları</h2>

    {
      notes.map((note) => <UserNoteOne note={note} />)
    }

      
      
    </div>
  );
}

export default UserNoteFeed;
