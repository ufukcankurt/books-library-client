import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import CurrentBook from "../currentBook/CurrentBook";
import "./currentlyReadings.css";

const CurrentlyReadings = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [readingCount, setReadingCount] = useState(0);

  useEffect(() => {}, []);

  const NoReadingComp = () => {
    return (
      <div className="noReadingBooksMessageDiv">
        <p className="noReadingBooksMessage">Şu anda okuduğunuz kitap yok</p>
      </div>
    );
  };

  return (
    <div className="currentlyReadingsContainer">
      <h2 className="currentlyReadingsTitle">Şu anda okuyor</h2>
      {currentUser.bookShelf?.map(
        (book) =>
          book.bookStatus === "reading" && (
            <CurrentBook book={book} setReadingCount={setReadingCount} />
          )
      )}
      {readingCount === 0 ? <NoReadingComp /> : ""}
    </div>
  );
};

export default CurrentlyReadings;
