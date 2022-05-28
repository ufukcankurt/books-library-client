import "./createNoteMain.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const CreateNoteMain = ({ book, currentBook, currentNote, isExist }) => {
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();

  useEffect(() => {
    if (isExist) {
      setNoteForm({
        userId: currentUser._id,
        bookId: bookId,
        start: 7,
        character: currentNote?.character,
        summary: isExist ? currentNote?.summary : "",
        quote: isExist ? currentNote?.quote : "",
        private: isExist ? currentNote?.private : "",
      });
    }
  }, [isExist]);

  const [noteForm, setNoteForm] = useState({
    userId: currentUser._id,
    bookId: bookId,
    start: 7,
    character: "",
    summary: "",
    quote: "",
    private: "",
  });

  const handleChange = (e) => {
    setNoteForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isExist) {
        const res = await axios.put(
          `${FETCH}notes/${currentNote._id}`,
          noteForm,
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        const resUser = await axios.post(`${FETCH}posts`, {userId:currentUser._id, bookId:bookId, type:"quote", desc:noteForm.summary});
      console.log("resUser",resUser);
        res.status === 200 && resUser.status === 200 ? navigate(`/${currentUser.username}/notes/${currentNote._id}`) : console.log("error");
          
      } else {
        const res = await axios.post(`${FETCH}notes/`, noteForm, {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        });
        const resUser = await axios.post(`${FETCH}posts`, {userId:currentUser._id, bookId:bookId, type:"quote", desc:noteForm.summary});
      console.log("resUser",resUser);
      res.status === 200 && resUser.status === 200 ? navigate(`/${currentUser.username}/notes/${currentNote._id}`) : console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="createNoteMainContainer">
      <div className="createNoteMainBookInfoContent">
        <Link to={`/book/${bookId}`}>
          <div className="createNoteMainBookImg">
            <img src={`${PF}${book.book_img}`} alt="" />
          </div>
        </Link>
        <div className="createNoteMainBookInfo">
          <p className="createNoteMainBookName">{book.book_name}</p>
          <p className="createNoteMainBookAuthor">{book.book_author}</p>
          <p className="createNoteMainBookPage">{book.book_page} Sayfa</p>
          {currentBook.bookEnd && currentBook.bookEnd !== "Invalid date" ? (
            <p className="createNoteMainBookDate">{currentBook.bookEnd}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <form>
        <div className="createNoteMainCharacters">
          <label htmlFor="character">Karakterler</label>
          <textarea
            name="character"
            id="character"
            cols="30"
            rows="10"
            value={noteForm.character}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainSummary">
          <label htmlFor="summary">Kitabın Özeti & Notları</label>
          <textarea
            name="summary"
            id="summary"
            cols="30"
            rows="10"
            value={noteForm.summary}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainQuotes">
          <label htmlFor="quotes">Kitaptan Alıntılar</label>
          <textarea
            name="quote"
            id="quote"
            cols="30"
            rows="10"
            value={noteForm.quote}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainPrivate">
          <div className="createNoteMainPrivateInfoTextContent">
            <label htmlFor="private">Kullanıcıya Özel Alan</label>
            <p className="createNoteMainPrivateInfoText">
              ▪ Bu alana yazdıklarınızı sadece siz görürsünüz.
            </p>
          </div>

          <textarea
            name="private"
            id="private"
            cols="30"
            rows="10"
            value={noteForm.private}
            onChange={handleChange}
          ></textarea>
        </div>
        <input
          className="createNoteMainSubmitButton"
          type="submit"
          value="Kaydet"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default CreateNoteMain;
