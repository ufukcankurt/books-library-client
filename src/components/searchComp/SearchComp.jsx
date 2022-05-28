import "./searchComp.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Close } from "@material-ui/icons";
import { useRef, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

const SearchComp = ({ message, book }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchRef = useRef();

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  const clearText = () => {
    setSearch("");
  };

  const handleFocus = () => {
    searchRef.current.style.display = "flex";
  };

  const handleBlur = () => {
    searchRef.current.style.display = "none";
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = book
        ? await axios.get(`${FETCH}users/get/book?q=${search}`)
        : await axios.get(`${FETCH}users/get/all?q=${search}`);

      setData(res.data);
    };
    if (search.length > 2) fetchData();
  }, [search]);

  const ItemUserComp = ({ item }) => {
    return (
      <>
        <Link to={`/${item.username}`}>
          <div className="itemUserComp">
            <div className="itemUserImg">
              <img src="/assets/users/ufukcankurt.jpg" alt="" />
            </div>
            <div className="itemUserInfo">
              <div className="itemUserName">{item.fullname}</div>
              <div className="itemUserUsername">@{item.username}</div>
            </div>
          </div>
        </Link>
      </>
    );
  };

  const ItemBookComp = ({ item }) => {
    return (
      <>
        <Link to={book ? `/create-note/${item._id}` : `/book/${item._id}`}>
          <div className="itemBookComp">
            <div className="itemBookImg">
              <img src="/assets/books/ermis.jpg" alt="" />
            </div>
            <div className="itemBookInfo">
              <div className="itemBookName">{item.book_name}</div>
              <div className="itemBookAuthor">{item.book_author}</div>
            </div>
          </div>
        </Link>
      </>
    );
  };

  console.log("ARAMADAN GELEN DATA", data);
  console.log("ARAMADAN GELEN search", search);

  return (
    <div className="searchContainer">
      <input
        type="text"
        id="search_button"
        name="search_button"
        placeholder={message}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button onClick={clearText} className="searchIcon">
        <Close />
      </button>
      <div ref={searchRef} className="searchCompModal">
        {data.map((item, index) => {
          if (item.username) {
            return <ItemUserComp item={item} key={index} />;
          } else {
            return <ItemBookComp item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default SearchComp;
