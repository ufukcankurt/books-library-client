import "./adminCreateBook.css";
import React from "react";
import { useState, useEffect } from "react";
import AdminCreateAddImage from "../adminCreateAddImage/AdminCreateAddImage";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
import AdminCreateGetAuthor from "../adminCreateGetAuthor/AdminCreateGetAuthor";
import { Cancel, Close } from "@material-ui/icons";
import LoadingComp from "../loadingComp/LoadingComp";
import MyAlertComp from "../../components/myAlertComp/MyAlertComp";

const AdminCreateBook = ({ currentUser }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [genresInput, setGenresInput] = useState("");
  const [image, setImage] = useState(null);
  const [newBook, setNewBook] = useState(null);

  const [url, setUrl] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [genres, setGenres] = useState([]);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookPublished, setBookPublished] = useState("");
  const [bookFirstPublished, setBookFirstPublished] = useState("");
  const [bookIsbn, setBookIsbn] = useState("");
  const [bookPublishingHouse, setBookPublishingHouse] = useState("");

  const addGenres = () => {
    const text = genresInput.trim();
    if (text !== "") {
      setGenres([...genres, text]);
      setGenresInput("");
    }
  };

  const resetStates = () => {
    setGenres([]);
    setBookName("");
    setBookAuthor("");
    setBookDesc("");
    setBookPage("");
    setBookPublished("");
    setBookFirstPublished("");
    setBookIsbn("");
    setBookPublishingHouse("");
    setSelectedAuthor(null);
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    // UPLOAD THE BOOK PHOTO TO FIREBASE
    const sendDatatoFirebase = async () => {
      try {
        setIsVisible(true);
        setMessage("Resim Yükleniyor Lütfen Bekleyiniz...");
        setIsError(true);
        if (image) {
          const imageRef = ref(storage, `/books/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image)
            .then(() => {
              getDownloadURL(imageRef)
                .then((url) => {
                  setUrl(url);
                })
                .catch((error) => {
                  console.log("error:", error);
                });
            })
            .catch((error) => {
              console.log("error:", error);
            });
        }
      } catch (error) {
        console.log(error);
      }
      setIsError(false);
    };

    sendDatatoFirebase();
  };

  //  CREATE NEW BOOK FETCHİNG
  useEffect(() => {
    const createNewBook = async () => {
      try {
        const res = await axios.post(
          `${FETCH}books`,
          {
            book_name: bookName,
            book_author: selectedAuthor.authorName,
            book_authorId: selectedAuthor._id,
            book_img: url,
            book_backDesc: bookDesc,
            book_page: bookPage,
            book_genre: genres,
            book_published: bookPublished,
            book_firstPublished: bookFirstPublished,
            book_publishingHouse: bookPublishingHouse,
            book_isbn: bookIsbn,
          },
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        setNewBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (url !== null) {
      createNewBook();
    }
  }, [url]);

  useEffect(() => {
    const addBook = async () => {
      try {
        const res = await axios.put(
          `${FETCH}authors/add/book/${newBook.book_authorId}`,
          {
            bookId: newBook._id,
            bookName: newBook.book_name,
            bookImg: newBook.book_img,
          },
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );

        setIsVisible(true);
        setMessage("Kitap Başarıyla Eklendi...");
        setIsFetching(false);
        res.status === 201 && resetStates();
      } catch (error) {
        console.log(error);
      }
    };

    if (newBook !== null) {
      addBook();
    }
  }, [newBook]);

  const deleteGenre = (genre) => {
    const newGenres = genres.filter((gen) => gen !== genre);
    setGenres(newGenres);
  };

  return (
    <div className="adminCreateBookContainer">
      <AdminCreateAddImage image={image} setImage={setImage} />
      {isVisible === true ? (
        <MyAlertComp
          danger={isError ? "danger" : ""}
          message={message}
          setIsError={setIsError}
          setIsVisible={setIsVisible}
        />
      ) : (
        ""
      )}
      <h1 className="adminCreateBookTitle">YENİ KİTAP OLUŞTUR</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book_name">Kitabın İsmi</label>
        <input
          type="text"
          id="book_name"
          name="book_name"
          placeholder="Kitabın İsmini Girin."
          required={true}
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />

        <AdminCreateGetAuthor
          currentUser={currentUser}
          bookAuthor={bookAuthor}
          setBookAuthor={setBookAuthor}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />

        <label htmlFor="book_desc">Kitabın Açıklaması</label>
        <textarea
          rows="5"
          cols="20"
          name="book_desc"
          id="book_desc"
          placeholder="Kitabın Tanıtım Bültenini Girin."
          value={bookDesc}
          onChange={(e) => setBookDesc(e.target.value)}
        ></textarea>
        <div className="adminCreateBookGenres">
          <label htmlFor="book_genre">Kitabın Türleri</label>
          <div className="adminCreateBookGenresContent">
            <input
              type="text"
              id="book_genre"
              name="book_genre"
              placeholder="Kitabın Türlerini Tek Tek Ekleyin."
              value={genresInput}
              onChange={(e) => setGenresInput(e.target.value)}
            />
            <div onClick={addGenres} className="adminCreateBookGenreButton">
              Ekle
            </div>
          </div>
          {genres.length > 0 ? (
            <div className="adminCreateBookShowGenres">
              {genres?.map((genre) => (
                <span className="singleGenre">
                  {genre}{" "}
                  <span
                    onClick={(e) => deleteGenre(genre)}
                    className="singleGenreClose"
                  >
                    <Cancel />
                  </span>{" "}
                </span>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="adminCreateBookMultiple">
          <div className="adminCreateBookMultipleItem">
            <label htmlFor="book_page">Kitabın Sayfası</label>
            <input
              type="number"
              id="book_page"
              name="book_page"
              placeholder="Kitabın Sayfa Sayısı "
              required={true}
              value={bookPage}
              onChange={(e) => setBookPage(e.target.value)}
            />
          </div>
          <div className="adminCreateBookMultipleItem">
            <label htmlFor="book_published">Kitabın Yayınlanma Yılı</label>
            <input
              type="text"
              id="book_published"
              name="book_published"
              placeholder="Yayınlanma Yılı "
              required={true}
              value={bookPublished}
              onChange={(e) => setBookPublished(e.target.value)}
            />
          </div>
          <div className="adminCreateBookMultipleItem">
            <label htmlFor="book_firstpublished">
              Kitabın İlk Yayınlanma Yılı
            </label>
            <input
              type="text"
              id="book_firstpublished"
              name="book_firstpublished"
              placeholder="İlk Yayınlanma Yılı "
              value={bookFirstPublished}
              onChange={(e) => setBookFirstPublished(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="book_isbn">Kitabın ISBN numarası</label>
        <input
          type="number"
          id="book_isbn"
          name="book_isbn"
          placeholder="Kitabın ISBN Numarasını Girin."
          required={true}
          value={bookIsbn}
          onChange={(e) => setBookIsbn(e.target.value)}
        />
        <label htmlFor="book_publishinghouse">Kitabın Yayınevi</label>
        <input
          type="text"
          id="book_publishinghouse"
          name="book_publishinghouse"
          placeholder="Kitabın Yayınevini Girin."
          required={true}
          value={bookPublishingHouse}
          onChange={(e) => setBookPublishingHouse(e.target.value)}
        />
        <button
          className="adminCreateBookSubmit"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? <LoadingComp button /> : "Yeni Kitap Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default AdminCreateBook;
