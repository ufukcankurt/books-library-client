import "./userShelfFeed.css";
import { useState } from "react";
import Book from "../book/Book";
import { Search } from "@material-ui/icons";

const UserShelfFeed = ({user, shelfName}) => {
  const [search, setSearch] = useState("");
  let actualName = ""
  if(shelfName === "Okuyacaklarım"){
    actualName = "willread"
 }else if(shelfName === "Yarım Bıraktıklarım"){
    actualName = "unfinished"
 }else if (shelfName === "Okuduklarım"){
    actualName = "finished"
 }else{
    actualName = ""
 }

  const handleSubmit = () => {};

  return (
    <div className="userShelfFeedContainer">
      <h2 className="userShelfFeedTitle">{shelfName}</h2>
      {/* <div className="userShelfFeedSearch">
        <input
          type="text"
          id="search_button"
          name="search_button"
          placeholder="Kitaplıkta Ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <Search />
        </button>
      </div> */}
      {
        user.bookShelf?.map((book, i) => (
          (book.bookHasShelf.includes(shelfName) || book.bookStatus === actualName ? <Book key={i} user= {user} bookId={book.bookId} /> :"")
        ))
      }

    </div>
  );
};

export default UserShelfFeed;
