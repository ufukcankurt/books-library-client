import "./userNoteDetailContent.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Lock } from "@material-ui/icons";

function UserNoteDetailContent({ note, book, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const author = book.book_author;
  const bookTitle = book.book_name;
  const { username } = useParams();

  const PrivateNoteComp = () => {
    return (
      <>
        <p className="userNoteDetailContentBookTitle">
          Özel Notlar <Lock />{" "}
        </p>
        <div className="userNoteDetailContentBookPrivateNotes">
          {note.private ? (
            note.private
          ) : (
            <p style={{ color: "red" }}>Henüz özel not eklenmedi.</p>
          )}
        </div>
      </>
    );
  };

  const UpdateNoteButtonComp = () => {
    return (
      <>
        <Link to={`/create-note/${book._id}`}>
          <div className="userNoteDetailContentUpdateButton">Notu Güncelle</div>
        </Link>
      </>
    );
  };

  return (
    <div className="userNoteDetailContentContainer">
      <div className="userNoteDetailContentBookDetail">
        {currentUser.username === username ? <UpdateNoteButtonComp /> : ""}
        <div className="userNoteDetailContentBookInfo">
          <div className="userNoteDetailContentBookTitles">
            <p className="userNoteDetailContentBookName">
              {bookTitle} - {author}{" "}
            </p>
          </div>
          <p className="userNoteDetailContentBookPage">
            {book.book_page} Sayfa
          </p>
          {/* <p className="userNoteDetailContentBookDate">20.02.2000</p> */}
        </div>
        <Link to={`/book/${book._id}`}>
          <div className="userNoteDetailContentBookImg">
            <img src={`${PF}${book.book_img}`} alt="" />
          </div>
        </Link>
      </div>
      <div className="userNoteDetailContentBookTextContent">
        <p className="userNoteDetailContentBookTitle">Karakterler</p>
        <div className="userNoteDetailContentBookCharacters">
          {note.character ? (
            note.character
          ) : (
            <p style={{ color: "red" }}>Henüz özet & not eklenmedi.</p>
          )}
        </div>

        <p className="userNoteDetailContentBookTitle">
          Kitabın Özeti & Notları
        </p>
        <div className="userNoteDetailContentBookSummary">
          {note.summary ? (
            note.summary
          ) : (
            <p style={{ color: "red" }}>Henüz özet & not eklenmedi.</p>
          )}
        </div>

        <p className="userNoteDetailContentBookTitle">Kitaptan Alıntılar</p>
        <div className="userNoteDetailContentBookQuotes">
          {note.quote ? (
            note.quote
          ) : (
            <p style={{ color: "red" }}>Henüz alıntı eklenmedi.</p>
          )}
        </div>

        {username === currentUser.username ? <PrivateNoteComp /> : ""}
      </div>
    </div>
  );
}

export default UserNoteDetailContent;
