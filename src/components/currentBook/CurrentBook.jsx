import { useEffect } from "react";
import "./currentBook.css"
import { Link } from "react-router-dom";

const CurrentBook = ({book, setReadingCount}) => {
    useEffect(()=> {
        setReadingCount((prev) => prev + 1)
    },[])
    return (
        <div className="CurrentBookContainer">
            <Link to={`/book/${book.bookId}`}>
            <div className="currentBookImg">
                <img src={book.bookImg} alt="" />
            </div>
            </Link>
            <div className="currentBookInfo">
                <p className="currentBookName">{book.bookName}</p>
                <p className="currentBookAuthor">{book.bookAuthor}</p>
            </div>
        </div>
    )
}

export default CurrentBook