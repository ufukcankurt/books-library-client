import "./bookDetail.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import BookDetailFeed from "../../components/bookDetailFeed/BookDetailFeed";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const BookDetail = () => {
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(`http://localhost:8000/api/books/${bookId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setBook(res.data);
    };
    getBook();
  }, [bookId, currentUser.accessToken]);

  return (
    <>
      <Nav />
      <div className="bookDetailContainer">
        <div className="bookDetailTimeline">
          <BookDetailFeed book={book} />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default BookDetail;
