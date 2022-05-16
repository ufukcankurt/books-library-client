import "./createNoteSearch.css";
import { useState, useRef } from "react";
import { Search } from "@material-ui/icons";

const CreateNoteSearch = () => {
  const [text, setText] = useState("");
  const modalRef = useRef()

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    modalRef.current.style.display = "flex"
  };

  const handleBlur = () => {
    modalRef.current.style.display = "none"
  }

  return (
    <div className="createNoteSearchContainer">
      <div className="createNoteSearchSearchBtn">
        <input
          onFocus={handleFocus}
          type="text"
          id="createNote_search"
          placeholder="Not eklemek istediğin kitabı ara"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="createNoteSearchSearchIcon" onClick={handleSubmit}>
          <Search />
        </button>
        <div ref={modalRef} className="createNoteSearchResultModal"></div>
      </div>
    </div>
  );
};

export default CreateNoteSearch;
