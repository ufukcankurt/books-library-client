import "./book.css";
import { Edit } from "@material-ui/icons";

const Book = () => {
  return (
    <div className="bookContainer">
      <div className="bookBookImg">
        <img src="/assets/books/book_2.jpg" alt="" />
      </div>
      <div className="bookBookInfo">
        <p className="bookBookName">Köpek Kalbi</p>
        <p className="bookBookAuthor">Mihail Bulgakov</p>
        <p className="bookBookPages">132 Sayfa</p>
        <p className="bookBookDate">12.05.2022 / 20.05.2022</p>
      </div>
      <div className="bookBookSettings">
        <div className="bookBookStatus">
          Kitap Durumunu Güncelle
        </div>
        <div className="bookBookSettingsAddQuote">
          <p className="bookAddQuoteTitle">Not Ekle</p>

        </div>
      </div>
    </div>
  );
};

export default Book;
