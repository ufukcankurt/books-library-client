import "./book.css";
import { BorderColor } from "@material-ui/icons";

const Book = () => {
  return (
    <div className="bookContainer">
      <div className="bookBookImg">
        <img src="/assets/books/book_2.jpg" alt="" />
      </div>
      <div className="bookBookInfo">
        <p className="bookBookName">Köpek Kalbi</p>
        <p className="bookBookAuthor">Mihail Bulgakov</p>
        <p className="bookBookPages">132</p>
      </div>
      <div className="bookBookSettings">
        <p className="bookAddQuote">Not Ekle</p>
        <BorderColor />
      </div>
    </div>
  );
};

export default Book;
