import "./bookStatusModal.css";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const BookStatusModal = ({ setIsClicked, book, userBook }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";

  const [formData, setFormData] = useState({
    bookStatus: userBook?.bookStatus,
    bookStart: "",
    bookEnd: "",
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
    setIsClicked(false);
  };

  const onChangeDate = (e) => {
    const name = e.target.name;
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    // setValue(newDate);
    console.log(newDate); //value picked from date picker
    setFormData((prevState) => ({
      ...prevState,
      [name]: newDate,
    }));
  };

  console.log("userbook", userBook);

  console.log("form", formData);

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
          <img src={`${PF}${book.book_img}`} alt="" />
        </div>
        <div className="bookStatusModalButtonContainer">
          <input
            type="radio"
            id="bookStatus_finished"
            name="bookStatus"
            required={true}
            value="finished"
            onChange={handleChange}
            checked={formData.bookStatus === "finished"}
          />
          <label htmlFor="bookStatus_finished">Okudum</label>
          <input
            type="radio"
            id="bookStatus_reading"
            name="bookStatus"
            required={true}
            value="reading"
            onChange={handleChange}
            checked={formData.bookStatus === "reading"}
          />
          <label htmlFor="bookStatus_reading">Okuyorum</label>
          <input
            type="radio"
            id="bookStatus_willread"
            name="bookStatus"
            required={true}
            value="willread"
            onChange={handleChange}
            checked={formData.bookStatus === "willread"}
          />
          <label htmlFor="bookStatus_willread">Okuyacağım</label>
          <input
            type="radio"
            id="bookStatus_unfinished"
            name="bookStatus"
            required={true}
            value="unfinished"
            onChange={handleChange}
            checked={formData.bookStatus === "unfinished"}
          />
          <label htmlFor="bookStatus_unfinished">Yarım bıraktım</label>
        </div>
      </div>
      <div className="bookStatusModalBookInfo">
        <p className="bookStatusModalPages">
          {" "}
          {book.book_name} - {book.book_author} - {book.book_page} sayfa{" "}
        </p>
        {/* <p className="bookStatusModalDate">Tarih: 12.05.2022/20.05.2022</p> */}
      </div>
      <div className="bookStatusModalDates">
        <div className="bookStatusModalMultipleContainer">
          <label htmlFor="bookStart">Başlama Tarihi</label>
          <input
            id="bookStart"
            type="date"
            name="bookStart"
            value={formData.bookStart}
            onChange={onChangeDate}
          />
        </div>
        <div className="bookStatusModalMultipleContainer">
          <label htmlFor="bookStatus_willread">Bitirme Tarihi</label>
          <input
            id="bookStatus_unfinished"
            type="date"
            name="bookEnd"
            value={formData.bookEnd}
            onChange={onChangeDate}
          />
        </div>
      </div>
      <div className="bookStatusModalShelf">
        <h2 className="bookStatusModalShelfTitle">BU KİTABI RAFLARINA EKLE</h2>
      </div>
      <div className="bookStatusModalUpdateButton">Kaydet</div>
    </div>
  );
};

export default BookStatusModal;
