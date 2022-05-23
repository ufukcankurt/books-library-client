import BookDetailOneBook from "../bookDetailOneBook/BookDetailOneBook";
import OthersQuotes from "../othersQuotes/OthersQuotes";
import "./bookDetailFeed.css";

const BookDetailFeed = ({ book, setIsOverlay }) => {
  return (
    <div className="bookDetailFeedContainer">
      <BookDetailOneBook setIsOverlay={setIsOverlay} book={book} />
      <OthersQuotes />
      <OthersQuotes />
      <OthersQuotes />
      <OthersQuotes />
    </div>
  );
};

export default BookDetailFeed;
