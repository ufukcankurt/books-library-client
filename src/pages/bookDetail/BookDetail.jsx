import "./bookDetail.css";
import RightBar from "../../components/rightBar/RightBar";
import BookDetailFeed from "../../components/bookDetailFeed/BookDetailFeed";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Overlay from "../../components/overlay/Overlay";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const BookDetail = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isOverlay, setIsOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getBook = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}books/${bookId}`, {
      headers: {
        token: `Bearer ${currentUser.accessToken}`,
      },
    });
    setBook(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    try {
      getBook();
    } catch (error) {
      console.log(error);
    }
  }, [bookId, currentUser.accessToken]);

  return (
    <>
      {isOverlay ? <Overlay /> : ""}
      <div className="bookDetailContainer">
        <div className="bookDetailTimeline">
          {isLoading ? (
            <LoadingComp />
          ) : (
            <BookDetailFeed setIsOverlay={setIsOverlay} book={book} />
          )}
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default BookDetail;
