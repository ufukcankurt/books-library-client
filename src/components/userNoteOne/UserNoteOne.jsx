import "./userNoteOne.css";
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function UserNoteOne({ note }) {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { username } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    try {
      const getBook = async () => {
        const res = await axios.get(`${FETCH}books/${note.bookId}`, {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        });
        setBook(res.data);
      };
      getBook();
    } catch (error) {
      console.log(error);
    }
  }, [note]);

  return (
    <div className="userNoteOneContainer">
      <div className="userNoteOneLeftside">
        <div className="userNoteOneImg">
          <img src={book.book_img}alt="" />
        </div>
        <div className="userNoteOneInfo">
          <p className="userNoteOneBookName">{book.book_name}</p>
          <p className="userNoteOneBookAuthor">{book.book_author}</p>
          <p className="userNoteOneBookPage">{book.book_page} Sayfa</p>
        </div>
      </div>
      <Link
        to={`/${username}/notes/${note._id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="userNoteOneButton">Notu görüntüle</div>
      </Link>
    </div>
  );
}

export default UserNoteOne;
