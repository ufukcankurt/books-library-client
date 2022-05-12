import "./bookShelf.css";
import MiniBook from "../miniBook/MiniBook";
import { Link } from "react-router-dom";

const BookShelf = () => {
  return (
    <div className="bookShelfContainer">
      <div className="bookShelfName">Okuduğu kitaplar</div>
      <div className="bookShelfInfo">
        <p className="bookShelfBooksCount">158 Kitap</p>
        <Link to="/ufukcankurt/shelf/okuyacaklarım" style={{ textDecoration: "none" }}>
          <p className="bookShelfMore">Hepsini gör</p>
        </Link>
      </div>
      <div className="bookShelfBooksContent">
        <MiniBook />
        <MiniBook />
        <MiniBook />
        <MiniBook />
        <MiniBook />
      </div>
    </div>
  );
};

export default BookShelf;
