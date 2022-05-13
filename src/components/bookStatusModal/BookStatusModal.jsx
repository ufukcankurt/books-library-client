import "./bookStatusModal.css";
import { Close } from "@material-ui/icons";
import { useState } from "react";

const BookStatusModal = ({isClicked, setIsClicked}) => {
  const [formData, setFormData] = useState({
    book_status: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setIsClicked(false)
  }

  console.log("form", formData)

  return (
    <div className="bookStatusModalContainer">
      <div className="bookStatusTopContainer">
        <h2 className="bookStatusModalTitle">KİTAP DURUMUNU GÜNCELLE</h2>
        <div className="bookStatusModalClose" onClick={handleClick}>
          <Close />
        </div>
      </div>
      <div className="bookStatusModalTopside">
        <div className="bookStatusModalImg">
          <img src="/assets/books/book_2.jpg" alt="" />
        </div>
        <div className="bookStatusModalButtonContainer">
          <input
            type="radio"
            id="book_status_finished"
            name="book_status"
            required={true}
            value="finished"
            onChange={handleChange}
            checked={formData.book_status === "finished"}
          />
          <label htmlFor="book_status_finished">Okudum</label>
          <input
            type="radio"
            id="book_status_reading"
            name="book_status"
            required={true}
            value="reading"
            onChange={handleChange}
            checked={formData.book_status === "reading"}
          />
          <label htmlFor="book_status_reading">Okuyorum</label>
          <input
            type="radio"
            id="book_status_willread"
            name="book_status"
            required={true}
            value="willread"
            onChange={handleChange}
            checked={formData.book_status === "willread"}
          />
          <label htmlFor="book_status_willread">Okuyacağım</label>
          <input
            type="radio"
            id="book_status_unfinished"
            name="book_status"
            required={true}
            value="unfinished"
            onChange={handleChange}
            checked={formData.book_status === "unfinished"}
          />
          <label htmlFor="book_status_unfinished">Yarım bıraktım</label>
        </div>
      </div>
      <div className="bookStatusModalBookInfo">
        <p className="bookStatusModalPages">Sayfa: 132</p>
        <p className="bookStatusModalDate">Tarih: 12.05.2022/20.05.2022</p>
      </div>
      <div className="bookStatusModalShelf">
        <h2 className="bookStatusModalShelfTitle">BU KİTABI RAFLARINA EKLE</h2>
      </div>
    </div>
  );
};

export default BookStatusModal;
