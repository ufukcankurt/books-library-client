import "./bookStatusModal.css";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const BookStatusModal = ({
  setIsClicked,
  book,
  userBook,
  currentUser,
  dispatch,
}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { bookId } = useParams();

  let allBook = [];

  const [formData, setFormData] = useState({
    bookId: bookId,
    bookStatus: userBook?.bookStatus,
    bookStart: userBook.bookStart,
    bookEnd: userBook.bookEnd,
    bookHasShelf: userBook?.bookHasShelf || [],
    bookName: book.book_name,
    bookPage: book.book_page,
    bookImg: book.book_img,
    bookAuthor: book.book_author,
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: newDate,
    }));
  };

  const onChangeShelfs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        bookHasShelf: [...formData.bookHasShelf, value],
      }));
    } else {
      const changeState = async () => {
        const index = await formData.bookHasShelf.indexOf(value);
        const temp = [...formData.bookHasShelf];
        temp.splice(index, 1);

        setFormData((prevState) => ({
          ...prevState,
          bookHasShelf: temp,
        }));
      };
      changeState();
    }
  };

  const setAllBooks = async () => {
    if (currentUser.bookShelf?.length !== 0) {
      await currentUser.bookShelf?.map((item, i) => {
        if (item.bookId !== bookId) {
          allBook.push(item);
        } else {
          allBook[i] = formData;
        }
        return allBook;
      });
    } else {
      allBook.push(formData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setAllBooks();
    try {
      await axios.put(`${FETCH}users/${currentUser._id}/book`, formData, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      dispatch({ type: "ADDNEWBOOK", payload: allBook });
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="bookStatusModalAllShelfs">
        {currentUser.allShelfs.map((shelf, i) => {
          if (
            shelf === "Okuduklarım" ||
            shelf === "Okuyacaklarım" ||
            shelf === "Yarım Bıraktıklarım"
          ) {
            return <></>;
          }
          return (
            <div key={i} className="bookStatusModalAllShelfsItem">
              <input
                type="checkbox"
                name={`checkbox${i}`}
                id={`checkbox${i}`}
                value={shelf}
                onChange={onChangeShelfs}
                checked={formData.bookHasShelf?.includes(shelf)}
              />
              <label htmlFor={`checkbox${i}`}>{shelf}</label>
            </div>
          );
        })}
        <p className="bookStatusModalAllShelfWarning">
          {currentUser.allShelfs?.length === 0 ? "Henüz hiç rafınız yok" : ""}
        </p>
      </div>
      <div onClick={handleSubmit} className="bookStatusModalUpdateButton">
        Kaydet
      </div>
    </div>
  );
};

export default BookStatusModal;
