import "./userNoteDetail.css";
import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserNoteDetailContent from "../../components/userNoteDetailContent/UserNoteDetailContent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function UserNoteDetail() {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { noteId } = useParams();
  const [note, setNote] = useState({});
  const [book, setBook] = useState({});

  useEffect(() => {
    const getDatas = async () => {
      const resNote = await axios.get(`${FETCH}notes/${noteId}`);
      setNote(resNote.data);

      const resBook = await axios.get(`${FETCH}books/${resNote.data.bookId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });

      setBook(resBook.data);
    };
    getDatas();
  }, [noteId]);

  return (
    <>
      <Nav />
      <div className="userNoteDetailContainer">
        <UserNoteDetailContent
          currentUser={currentUser}
          book={book}
          note={note}
        />
        <RightBar profile />
      </div>
    </>
  );
}

export default UserNoteDetail;
