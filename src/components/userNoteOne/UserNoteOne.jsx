import "./userNoteOne.css";
import React from "react";
import { Link } from "react-router-dom";

function UserNoteOne() {
  return (
    <div className="userNoteOneContainer">
      <div className="userNoteOneLeftside">
        <div className="userNoteOneImg">
          <img src="/assets/books/book_2.jpg" alt="" />
        </div>
        <div className="userNoteOneInfo">
          <p className="userNoteOneBookName">Köpek Kalbi</p>
          <p className="userNoteOneBookAuthor">Mihail Bulgakov</p>
          <p className="userNoteOneBookPage">150 Sayfa</p>
        </div>
      </div>
      <Link to="/ufukcankurt/notes/123" style={{color:"inherit", textDecoration:"none"} }>
        <div className="userNoteOneButton">Notu görüntüle</div>
      </Link>
    </div>
  );
}

export default UserNoteOne;
