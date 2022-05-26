import "./createNoteDetail.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import CreateNoteFeed from "../../components/createNoteFeed/CreateNoteFeed";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const CreateNoteDetail = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [currentBook, setCurrentBook] = useState({});
  const [currentBookEndDate, setCurrentBookEndDate] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [isExist, setIsExist] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    const getAllNotes = async () => {
      const res = await axios.get(
        `${FETCH}notes/profile/${currentUser.username}`,
        {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        }
      );
      setAllNotes(res.data);
    };
    getAllNotes();
  }, [bookId]);

  useEffect(() => {
    allNotes.map((note, i) => {
      if (note.bookId === bookId) {
        setIsExist(true);
        setCurrentNote(note);
      }
      return note;
    });
  }, [allNotes]);
  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(`${FETCH}books/${bookId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setBook(res.data);
    };
    const getCurrentBook = async () => {
      await currentUser.bookShelf?.map(
        (book) => book.bookId === bookId && setCurrentBook(book)
      );
      currentBook && setCurrentBookEndDate(currentBook.bookEnd);
    };
    getBook();
    getCurrentBook();
  }, [bookId]);

  return (
    <>
      <Nav />
      <div className="createNoteDetailContainer">
        <CreateNoteFeed
          currentNote={currentNote}
          isExist={isExist}
          book={book}
          currentBook={currentBook}
        />
        <RightBar profile />
      </div>
    </>
  );
};

export default CreateNoteDetail;
