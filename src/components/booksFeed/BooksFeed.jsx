import "./booksFeed.css";
import BookShelf from "../bookShelf/BookShelf";
import { useState } from "react";

const BooksFeed = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [newShelf, setNewShelf] = useState("");

  const handleChange = (e) => {
    setNewShelf(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // fetch request
  };

  const clickedHandleCreateNewShelf = (e) => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="booksFeedContainer">
      <div className="booksFeedTop">
        <div className="booksFeedTopTitles">
          <h2 className="booksFeedTitle">Kitapları</h2>
          <div
            className="booksFeedNewShelfButton"
            onClick={clickedHandleCreateNewShelf}
          >
            Yeni Raf Ekle
          </div>
        </div>
        <div
          className="booksFeedNewShelfModal"
          style={isClicked ? { display: "flex" } : { display: "none" }}
        >
          <label htmlFor="new_shelf">Başlık</label>
          <input
            type="text"
            id="new_shelf"
            name="new_shelf"
            placeholder="Yeni Raf İsminizi Girin."
            required={true}
            value={newShelf}
            onChange={handleChange}
          />
          <div className="booksFeedCreateShelfButton" onClick={handleSubmit}>
            Oluştur
          </div>
        </div>
      </div>
      <BookShelf />
      <BookShelf />
      <BookShelf />
      <BookShelf />
    </div>
  );
};

export default BooksFeed;
