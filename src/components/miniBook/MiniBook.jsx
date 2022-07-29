import axios from "axios";
import { useEffect, useContext, useState } from "react";
import "./miniBook.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";

const MiniBook = ({ bookId, setCount }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(`${FETCH}books/${bookId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setBook(res.data);
      setCount((prev) => prev + 1);
    };
    getBook();
  }, [bookId, FETCH, currentUser.accessToken]);

  return (
    <>
      <Link to={`/book/${bookId}`}>
        <div className="miniBookContainer">
          <img src={book.book_img} alt="" />
        </div>
      </Link>
    </>
  );
};

export default MiniBook;
