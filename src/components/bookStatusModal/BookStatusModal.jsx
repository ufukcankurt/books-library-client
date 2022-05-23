import "./bookStatusModal.css";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const BookStatusModal = ({ setIsClicked, book, userBook, currentUser, dispatch }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const FETCH = process.env.REACT_APP_FETCH_PATH 
  const {bookId} = useParams();
  // const allBooks = currentUser.bookShelf.map((item,i)=> console.log(i,item))
  // const bookIndex = allBooks.findIndex((obj)=> obj.bookId === {bookId})
  let allBook = []
  
  console.log(currentUser);
// console.log("BOOKİNDEX", bookIndex);
console.log("allbooks", typeof(allBooks));
  console.log("fetchPath",FETCH);
  console.log("PF", PF);
  console.log("userBook",userBook);

  const [formData, setFormData] = useState({
    bookId:bookId,
    bookStatus: userBook?.bookStatus,
    bookStart: userBook.bookStart,
    bookEnd: userBook.bookEnd,
    bookHasShelf: userBook?.bookHasShelf,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("HANDLECHANGE VALUE", value);

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

    console.log("name", name);
    console.log("ONCHANGESHELF VALUE", value);
    console.log("checked", checked);

    if (checked) {
      // userBook.bookHasShelf.push(value)
      // const item = userBook.bookHasShelf
      // setFormData.bookHasShelf.push(value)
      setFormData((prevState) => ({
        ...prevState,
        bookHasShelf: [...formData.bookHasShelf, value],
      }));
    } else {
      const changeState = async () => {
        console.log("giriyon mu buraya");
        const index = await formData.bookHasShelf.indexOf(value);
        console.log("index nedir", index);
        const temp = await [...formData.bookHasShelf];
        console.log("temp nedir", temp);
        await temp.splice(index, 1);

        setFormData((prevState) => ({
          ...prevState,
          bookHasShelf: temp,
        }));
        console.log("son halini yazalım", formData);
      };
      changeState();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    currentUser.bookShelf.map((item,i)=> {
      if(item.bookId !== bookId){
        allBook.push(item)
      }else{
        allBook[i] = formData
      }
      return allBook;
    })
    console.log("ALL BOK", allBook);
    try {
      const res = await axios.put(`${FETCH}users/${currentUser._id}/book`, formData, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      })
      dispatch({ type: "ADDNEWBOOK", payload: allBook });
      console.log("RESPONSE", res);
      console.log("EN SON ALL BOOK",allBook);
    } catch (error) {
        console.log(error);
    }
  };

  // const setAllData = () => {
  //   const 
  // }

  console.log("formData", formData);

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
      <div className="bookStatusModalAllShelfs">
        {currentUser.allShelfs.map(
          (shelf, i) => {
            return (
              <div key={i} className="bookStatusModalAllShelfsItem">
                <input
                  type="checkbox"
                  name={`checkbox${i}`}
                  id={`checkbox${i}`}
                  value={shelf}
                  onChange={onChangeShelfs}
                  checked={formData.bookHasShelf.includes(shelf)}
                />
                <label htmlFor={`checkbox${i}`}>{shelf}</label>
              </div>
            );
          }

          // userBook.bookHasShelf.map((item,j) => {
          //   if (item === shelf) {
          // return (
          //   <div key={i} className="bookStatusModalAllShelfsItem">
          //   <input
          //     type="checkbox"
          //     name={`checkbox${i}`}
          //     id={`checkbox${i}`}
          //     value={shelf}
          //     checked= {userBook.bookHasShelf.includes(shelf)}
          //     onChange={onChangeShelfs}
          //   />
          //   <label htmlFor={`checkbox${i}`}>{shelf}</label>
          // </div>
          // )
          //   } else {
          //     return(
          //       <div key={i} className="bookStatusModalAllShelfsItem">
          //       <input
          //         type="checkbox"
          //         name={`checkbox${i}`}
          //         id={`checkbox${i}`}
          //         value={shelf}
          //         onChange={onChangeShelfs}
          //       />
          //       <label htmlFor={`checkbox${i}`}>{shelf}</label>
          //     </div>
          //     )
          //   }
          // })
        )}
      </div>
      <div onClick={handleSubmit} className="bookStatusModalUpdateButton">
        Kaydet
      </div>
    </div>
  );
};

export default BookStatusModal;
