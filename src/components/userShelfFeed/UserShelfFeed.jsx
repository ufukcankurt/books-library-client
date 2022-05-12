import "./userShelfFeed.css";
import { useState } from "react";
import Book from "../book/Book";
import { Search } from "@material-ui/icons";

const UserShelfFeed = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="userShelfFeedContainer">
      <h2 className="userShelfFeedTitle">Yarım Bıraktıkları</h2>
      <div className="userShelfFeedSearch">
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
      </div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default UserShelfFeed;
