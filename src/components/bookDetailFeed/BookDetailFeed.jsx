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
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      const resNote = await axios.get(`${FETCH}notes/book/${bookId}`);
      setNotes(resNote.data);
    };
    getDatas();
  }, [bookId]);

  console.log(notes);
  console.log(typeof(notes));

  window.addEventListener('load', (event) => {
    setIsRender(true);
  });


  return (
    <div className="bookDetailFeedContainer">
      <BookDetailOneBook setIsOverlay={setIsOverlay} book={book} />
      
    {notes?.length === 0 && isRender === true ? <p className="bookDetailFeedWarning">Henüz bu kitap için bir not yazılmamış!</p> : ""}
      {notes?.map((note) => (
        note?.summary ? <OthersQuotes note={note} /> :""
      ))}
    </div>
  );
};

export default BookDetailFeed;
