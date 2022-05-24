import "./bookShelf.css";
import MiniBook from "../miniBook/MiniBook";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookShelf = ({shelf, user}) => {
  let actualName = ""
  const [count, setCount] = useState(0)
  if(shelf === "Okuyacaklarım"){
     actualName = "willread"
  }else if(shelf === "Yarım Bıraktıklarım"){
     actualName = "unfinished"
  }else if (shelf === "Okuduklarım"){
     actualName = "finished"
  }else{
     actualName = ""
  }
  return (
    <div className="bookShelfContainer">
      <div className="bookShelfName">{shelf}</div>
      <div className="bookShelfInfo">
        <p className="bookShelfBooksCount">{count} Kitap</p>
        <Link to="/ufukcankurt/shelf/okuyacaklarım" style={{ textDecoration: "none" }}>
          <p className="bookShelfMore">Hepsini gör</p>
        </Link>
      </div>
      <div className="bookShelfBooksContent">
        {
          user.bookShelf?.map((book,i)=> (
            (book.bookHasShelf.includes(shelf) || book.bookStatus === actualName ? <MiniBook key={i} bookId={book.bookId} setCount={setCount}/> :"")
          ))
        }
      </div>
    </div>
  );
};

export default BookShelf;
