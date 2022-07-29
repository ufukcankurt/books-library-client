import React from "react";
import { Link } from "react-router-dom";
import "./booksPost.css";

const BooksPost = ({ book }) => {
  return (
    <div className="bookPostContainer">
      <Link to={`/book/${book._id}`}>
        <div className="bookPostImg">
          <img src={book.book_img} alt="" />
        </div>
      </Link>
      <div className="bookPostInfos">
        <p className="bookPostName">{`${book.book_name} - ${book.book_author}`}</p>
        <p className="bookPostPage">
          <span className="bookPostBold">Sayfa: </span>
          {book.book_page}
        </p>
        <p className="bookPostPublishingHouse">
          <span className="bookPostBold">Yayınevi: </span>
          {book.book_publishingHouse}
        </p>
        <p className="bookPostGenre">
          <span className="bookPostBold">Tür: </span>
          {book.book_genre.map((genre) => `${genre} - `)}
        </p>
        <p className="bookPostIsbn">
          <span className="bookPostBold">ISBN: </span>
          {book.book_isbn}
        </p>
      </div>
      <div className="bookPostButton">
        <Link to={`/book/${book._id}`}>
          <button>Kitaba Git</button>
        </Link>
      </div>
    </div>
  );
};

export default BooksPost;
