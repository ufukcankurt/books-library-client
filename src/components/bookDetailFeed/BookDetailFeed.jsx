import BookDetailOneBook from "../bookDetailOneBook/BookDetailOneBook"
import OthersQuotes from "../othersQuotes/OthersQuotes"
import "./bookDetailFeed.css"

const BookDetailFeed = () => {
  return (
      <div className="bookDetailFeedContainer">
          <BookDetailOneBook/>
          <OthersQuotes/>
          <OthersQuotes/>
          <OthersQuotes/>
          <OthersQuotes/>
      </div>
  )
}

export default BookDetailFeed