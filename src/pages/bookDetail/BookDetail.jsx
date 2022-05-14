import "./bookDetail.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import BookDetailFeed from "../../components/bookDetailFeed/BookDetailFeed";

const BookDetail = () => {
  return (
    <>
      <Nav />
      <div className="bookDetailContainer">
        <div className="bookDetailTimeline">
          <BookDetailFeed />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default BookDetail;
