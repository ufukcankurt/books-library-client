import "./adminCreateGetAuthor.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Close } from "@material-ui/icons";

const AdminCreateGetAuthor = ({
  bookAuthor,
  setBookAuthor,
  currentUser,
  selectedAuthor,
  setSelectedAuthor,
}) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [authors, setAuthors] = useState([]);

  const getAuthor = async () => {
    const res = await axios.get(
      `${FETCH}authors/get/author/name?q=${bookAuthor}`,
      {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      }
    );
    setAuthors(res.data);
  };

  useEffect(() => {
    if (bookAuthor.length > 2) {
      getAuthor();
    }
  }, [bookAuthor]);

  const handleClose = () => {
    setSelectedAuthor(null);
    setBookAuthor("");
  };

  const ShowAllAuthorsComp = () => {
    return (
      <>
        {authors?.map((author) => (
          <div className="adminCreateGetAuthorItem" key={author._id}>
            <div className="adminCreateGetAuthorInfos">
              <div className="adminCreateGetAuthorImg">
                <img src={author.authorImg} alt="" />
              </div>
              <div className="adminCreateGetAuthorName">
                {author.authorName}
              </div>
            </div>
            <button
              onClick={(e) => {
                setSelectedAuthor(author);
              }}
              className="adminCreateGetAuthorButton"
              type="button"
            >
              Seç
            </button>
          </div>
        ))}
      </>
    );
  };

  const ShowAuthorsComp = () => {
    return (
      <div className="adminCreateGetAuthorShowAuthors">
        {authors.length > 0 ? (
          <ShowAllAuthorsComp />
        ) : (
          <p className="adminCreateGetAuthorShowAuthorsError">
            Yazar Bulunamadı!
          </p>
        )}
      </div>
    );
  };

  const ShowSelectedAuthorComp = () => {
    return (
      <div className="adminCreateGetAuthorSelected">
        <div className="adminCreateGetAuthorSelectedContent">
          <img
            className="selectedAuthorImg"
            src={selectedAuthor.authorImg}
            alt=""
          />
          <p className="selectedAuthorName">{selectedAuthor.authorName}</p>
        </div>
        <Close onClick={handleClose} />
      </div>
    );
  };

  return (
    <div className="adminCreateGetAuthorContent">
      <div
        className="adminCreateGetAuthorContentDeleteInput"
        style={
          bookAuthor.length > 0 ? { display: "flex" } : { display: "none" }
        }
        onClick={(e) => setBookAuthor("")}
      >
        <Close />
      </div>

      <label htmlFor="book_author">Kitabın Yazarı</label>
      <input
        type="text"
        id="book_author"
        name="book_author"
        placeholder="Kitabın Yazarını Aratın."
        required={true}
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      {bookAuthor.length > 2 && selectedAuthor === null ? (
        <ShowAuthorsComp />
      ) : (
        ""
      )}
      {selectedAuthor !== null ? <ShowSelectedAuthorComp /> : ""}
    </div>
  );
};

export default AdminCreateGetAuthor;
