import "./bookDetailFeed.css";
import { useParams } from "react-router-dom";
import BookDetailOneBook from "../bookDetailOneBook/BookDetailOneBook";
import OthersQuotes from "../othersQuotes/OthersQuotes";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext, useState, useEffect } from "react";

const BookDetailFeed = ({ book, setIsOverlay }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const resNote = await axios.get(`${FETCH}notes/book/${bookId}`);
      setNotes(resNote.data);
    };
    getDatas();
  }, [bookId]);

  return (
    <div className="bookDetailFeedContainer">
      <BookDetailOneBook setIsOverlay={setIsOverlay} book={book} />

      {notes?.map((note) => (
        <OthersQuotes note={note} />
      ))}
    </div>
  );
};

export default BookDetailFeed;
