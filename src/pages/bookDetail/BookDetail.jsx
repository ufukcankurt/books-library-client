import "./bookDetail.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import BookDetailFeed from "../../components/bookDetailFeed/BookDetailFeed";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Overlay from "../../components/overlay/Overlay";

const BookDetail = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    try {
      const getBook = async () => {
        const res = await axios.get(`${FETCH}books/${bookId}`, {
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
  }, [bookId, currentUser.accessToken]);

  return (
    <>
      {isOverlay ? <Overlay /> : ""}
      <Nav />
      <div className="bookDetailContainer">
        <div className="bookDetailTimeline">
          <BookDetailFeed setIsOverlay={setIsOverlay} book={book} />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default BookDetail;
