import "./book.css";
import { useState } from "react";
import BookStatusModal from "../bookStatusModal/BookStatusModal";

const Book = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

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
        <div className="bookBookStatus" onClick={handleClick} >
          Kitap Durumunu Güncelle
        </div>
        <div className="bookBookSettingsAddQuote">
          <p className="bookAddQuoteTitle">Not Ekle</p>

        </div>
      </div>
      {isClicked ? <BookStatusModal isClicked={isClicked} setIsClicked={setIsClicked} /> : <></>}
    </div>
  );
};

export default Book;
