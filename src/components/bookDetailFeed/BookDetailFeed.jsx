import BookDetailOneBook from "../bookDetailOneBook/BookDetailOneBook";
import OthersQuotes from "../othersQuotes/OthersQuotes";
import "./bookDetailFeed.css";

const BookDetailFeed = ({ book }) => {
  return (
    <div className="bookDetailFeedContainer">
      <BookDetailOneBook book={book} />
      <OthersQuotes />
      <OthersQuotes />
      <OthersQuotes />
      <OthersQuotes />
    </div>
  );
};

export default BookDetailFeed;
