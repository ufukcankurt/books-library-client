import "./userNotes.css"
import React from 'react'
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import UserNotesFeed from "../../components/userNotesFeed/UserNotesFeed";


function UserNotes() {
  return (
    <div>
      <Nav />
      <div className="userNotesContainer">
        <div className="userNotesTimeline">
          <UserProfileInfo/>
          <UserNotesFeed/>
        </div>
        <RightBar profile/>
      </div>
    </div>
  )
}

export default UserNotes
