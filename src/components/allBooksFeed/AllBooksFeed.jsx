import "./allBooksFeed.css";
import React from "react";
import BooksPost from "../booksPost/BooksPost";
import AllBooksSearch from "../allBooksSearch/AllBooksSearch";

const AllBooksFeed = ({ books, setBooks }) => {
  return (
    <div className="allBooksFeedContainer">
      <h1 className="allBooksFeedTitle">TÜM KİTAPLAR</h1>

      <AllBooksSearch setBooks={setBooks} />

      {books.map((item) => (
        <BooksPost key={item._id} book={item} />
      ))}
    </div>
  );
};

export default AllBooksFeed;
