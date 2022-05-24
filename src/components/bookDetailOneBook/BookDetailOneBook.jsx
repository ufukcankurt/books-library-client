import "./bookDetailOneBook.css";
import BookStatusModal from "../bookStatusModal/BookStatusModal";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useParams } from "react-router-dom";

const BookDetailOneBook = ({ book, setIsOverlay }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const [isClicked, setIsClicked] = useState(false);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [userBook, setUserBook] = useState({});
  const { bookId } = useParams();
  // const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      await currentUser.bookShelf.map(
        // setIsAdded(true);
        (item) => item.bookId === bookId && setUserBook(item)
      );
    };
    getBook();
  }, [bookId, currentUser.bookShelf]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="bookDetailOneBookContainer">
      <div className="bookDetailOneBookButtons">
        <Link
          to="/create-note"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="bookDetailOneBookAddQuoteBtn">Not Ekle</div>
        </Link>
        <div className="bookDetailOneBookStatusBtn" onClick={handleClick}>
          Kitaplığıma Ekle
        </div>
        {isClicked ? (
          <BookStatusModal
            dispatch={dispatch}
            currentUser={currentUser}
            userBook={userBook}
            book={book}
            setIsClicked={setIsClicked}
          />
        ) : (
          <></>
        )}
        {isClicked ? setIsOverlay(true) : setIsOverlay(false)}
      </div>
      <div className="bookDetailOneBookTopside">
        <div className="bookDetailOneBookImage">
          <img src={`${PF}${book.book_img}`} alt="" />
        </div>
        <div className="bookDetailOneBookContent">
          <div className="bookDetailOneBookDetail">
            <p className="bookDetailOneBookDetailName">{book.book_name}</p>
            <p className="bookDetailOneBookDetailAuthor">{book.book_author}</p>
            <p className="bookDetailOneBookDetailPage">
              {book.book_page} Sayfa
            </p>
            {book.book_genre?.map((item, i) => {
              return (
                <p key={i} className="bookDetailOneBookDetailType">
                  {item}
                </p>
              );
            })}
            <p className="bookDetailOneBookDetailEdition">
              {book.book_published} - {book.book_publishingHouse} - ({" "}
              {book.book_firstPublished
                ? `İlk
              yayınlanma: ${book.book_firstPublished}`
                : ""}
              ) - {book.book_isbn}
            </p>
          </div>
        </div>
      </div>
      <div className="bookDetailOneBookBehindBook">
        <h2 className="bookDetailOneBookBehindBookTitle">Tanıtım Bülteni:</h2>
        <p className="bookDetailOneBookBehindBookText">{book.book_backDesc}</p>
      </div>
      <p className="bookDetailOneBookOthersQuote">
        Diğer kullanıcıların yazdığı notlar
      </p>
    </div>
  );
};

export default BookDetailOneBook;
