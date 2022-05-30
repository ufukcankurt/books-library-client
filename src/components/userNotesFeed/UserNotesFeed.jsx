import "./userNotesFeed.css";
import React from "react";
import UserNoteOne from "../userNoteOne/UserNoteOne";
import { useEffect, useState } from "react";

function UserNoteFeed({notes}) {

  const [isRender, setIsRender] = useState(false);


  useEffect(()=> {
    setTimeout(() => {
      setIsRender(true);
    }, 1000);
  },[notes])
  return (
    <div className="userNoteFeedContainer">
      <h2 className="userNoteFeedTitle">Notları</h2>
      {notes?.length === 0 && isRender === true ? (
          <p className="feedWarning">Henüz eklediğiniz bir not yok!</p>
        ) : (
          ""
        )}
    {
      notes.map((note) => <UserNoteOne note={note} />)
    }

      
      
    </div>
  );
}

export default UserNoteFeed;
