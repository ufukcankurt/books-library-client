import "./userNoteDetail.css";
import React from "react";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserNoteDetailContent from "../../components/userNoteDetailContent/UserNoteDetailContent";

function UserNoteDetail() {
  return (
    <>
      <Nav />
      <div className="userNoteDetailContainer">
        <UserNoteDetailContent/>
        <RightBar profile />
      </div>
    </>
  );
}

export default UserNoteDetail;
