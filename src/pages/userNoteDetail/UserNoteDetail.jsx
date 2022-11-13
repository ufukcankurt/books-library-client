import "./userNoteDetail.css";
import React, { useContext, useEffect, useState } from "react";
import RightBar from "../../components/rightBar/RightBar";
import UserNoteDetailContent from "../../components/userNoteDetailContent/UserNoteDetailContent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import LoadingComp from "../../components/loadingComp/LoadingComp";

function UserNoteDetail() {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { noteId } = useParams();
  const [note, setNote] = useState({});
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDatas = async () => {
    setIsLoading(true);
    const resNote = await axios.get(`${FETCH}notes/${noteId}`);
    setNote(resNote.data);

    const resBook = await axios.get(`${FETCH}books/${resNote.data.bookId}`, {
      headers: {
        token: `Bearer ${currentUser.accessToken}`,
      },
    });

    setBook(resBook.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getDatas();
  }, [noteId]);

  return (
    <>
      <div className="userNoteDetailContainer">
        {isLoading ? (
          <LoadingComp />
        ) : (
          <UserNoteDetailContent
            currentUser={currentUser}
            book={book}
            note={note}
          />
        )}

        <RightBar profile />
      </div>
    </>
  );
}

export default UserNoteDetail;
