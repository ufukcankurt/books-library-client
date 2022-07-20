import "./allBooksRightBar.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AllBooksRightBar = ({ setBooks, allBooks }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isSelected, setIsSelected] = useState("Tüm Kitaplar");

  const genres = [
    "Dünya Klasikleri",
    "Edebiyat",
    "Şiir",
    "Biyografi",
    "Tiyatro",
    "Oyun",
    "Hikaye",
    "Roman",
    "Felsefe",
    "Düşünce",
  ];

  const handleFetch = async (e) => {
    const res = await axios.get(
      `${FETCH}users/get/book/category?q=${e.target.innerText}`
    );
    setBooks(res.data);
    setIsSelected(e.target.innerText);
  };

  const handleAllBook = () => {
    setBooks(allBooks);
    setIsSelected("Tüm Kitaplar");
  };

  return (
    <div className="allBooksRightBarContainer">
      <h2 className="newsFeedTitle">Kategoriler</h2>
      <ul>
        <li onClick={handleAllBook}>
          <Link to={`/books`} style={{ textDecoration: "none" }}>
            <div className="allBooksRightBarLinksDiv">
              <img
                className="allBooksRightBarLinkImage"
                src="/assets/book_12.png"
                alt=""
              />
              <span style={
              isSelected === "Tüm Kitaplar"
                ? { color: "red"}
                : { color: "inherit" }
            } className="allBooksRightBarLink">Tüm Kitaplar</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="allBooksRightBarGenres">
        {genres?.map((genre, i) => (
          <span
            key={i}
            onClick={(e) => handleFetch(e)}
            className="allBooksRightBarGenre"
            style={
              isSelected === genre
                ? { color: "red", border: "1px solid red" }
                : { color: "inherit" }
            }
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AllBooksRightBar;
