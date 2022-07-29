import "./book.css";
import { useEffect, useContext, useState } from "react";
import BookStatusModal from "../bookStatusModal/BookStatusModal";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Book = ({ bookId, user }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [book, setBook] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(`${FETCH}books/${bookId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setBook(res.data);
    };
    getBook();
  }, [bookId, FETCH, currentUser.accessToken]);

  const AddQuoteComp = () => {
    return (
      <>
      <Link to={`/create-note/${book._id}`}>
      <div className="bookBookSettingsAddQuote">
        <p className="bookAddQuoteTitle">Not Ekle</p>
      </div>
      </Link>
      </>
    );
  };

  return (
    <div className="bookContainer">
      <div className="bookBookImg">
        <img src={book.book_img} alt="" />
      </div>
      <div className="bookBookInfo">
        <p className="bookBookName">{book.book_name}</p>
        <p className="bookBookAuthor">{book.book_author}</p>
        <p className="bookBookPages">{book.book_page} Sayfa</p>
        {/* <p className="bookBookDate">12.05.2022 / 20.05.2022</p> */}
      </div>
      <div className="bookBookSettings">
        <Link to={`/book/${bookId}`}>
          <div className="bookBookStatus" onClick={handleClick}>
            Kitaba Git
          </div>
        </Link>
        <AddQuoteComp />
      </div>
    </div>
  );
};

export default Book;
