import Nav from "../../components/nav/Nav";
import "./book.css";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";
import AllBooksFeed from "../../components/allBooksFeed/AllBooksFeed";
import AllBooksRightBar from "../../components/allBooksRightBar/AllBooksRightBar";

const Books = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}books/all/books`);
    setBooks(res.data);
    setAllBooks(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const Loader = () => {
    return (
      <div className="BooksLoader">
        <LoadingComp />
      </div>  
    );
  };

  return (
    <>
      <Nav />
      <div className="booksContainer">
        {isLoading ? (
          <Loader />
        ) : (
          <AllBooksFeed setBooks={setBooks} books={books} />
        )}

        <AllBooksRightBar allBooks={allBooks} setBooks={setBooks} />
      </div>
    </>
  );
};

export default Books;
