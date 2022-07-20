import "./allBooksSearch.css";
import React, { useState, useEffect } from "react";
import { Close } from "@material-ui/icons";
import axios from "axios";

const AllBooksSearch = ({ setBooks }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${FETCH}users/get/book?q=${search}`);
      setBooks(res.data);
    };

    const fetchDataAll = async () => {
      const res = await axios.get(`${FETCH}books/all/books`);
      setBooks(res.data);
    };

    if (search.length > 2) fetchData();
    if (search.length <= 2) fetchDataAll();
  }, [search]);

  const clearText = () => {
    setSearch("");
  };

  return (
    <div className="allBooksSearchContainer">
      <input
        type="text"
        className="allBooksSearchInput"
        placeholder="Kitap ara"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={clearText} className="allBooksSearchIcon">
          <Close />
        </button>
    </div>
  );
};

export default AllBooksSearch;
