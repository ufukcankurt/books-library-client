import "./adminCreateNews.css";
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
import AdminCreateAddImage from "../adminCreateAddImage/AdminCreateAddImage";
import LoadingComp from "../loadingComp/LoadingComp";
import MyAlertComp from "../../components/myAlertComp/MyAlertComp";

const AdminCreateNews = ({ currentUser }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [image, setImage] = useState(null);

  const [url, setUrl] = useState(null);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsCategory, setNewsCategory] = useState("");
  const today = new Date().toLocaleDateString();

  const resetStates = () => {
    setNewsTitle("");
    setNewsDesc("");
    setNewsCategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    // UPLOAD THE NEWS PHOTO TO FIREBASE
    const sendDatatoFirebase = async () => {
      try {
        setIsVisible(true);
        setMessage("Resim Yükleniyor Lütfen Bekleyiniz...");
        setIsError(true);
        if (image) {
          const imageRef = ref(storage, `/news/${Date.now()}_${image.name}`);
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

  //  CREATE NEW AUTHOR FETCHİNG
  useEffect(() => {
    const createNewBook = async () => {
      try {
        const res = await axios.post(
          `${FETCH}news`,
          {
            title: newsTitle,
            img: url,
            category: newsCategory,
            desc: newsDesc,
            shareDate: today,
          },
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        setIsFetching(false);
        res.status === 201 && resetStates();
        res.status === 201 && window.location.reload();
        res.status === 201 && setIsVisible(true);
        res.status === 201 && setMessage("Haber Başarıyla Eklendi...");
      } catch (error) {
        console.log(error);
      }
    };

    if (url !== null) {
      createNewBook();
    }
  }, [url]);

  return (
    <div className="adminCreateNewsContainer">
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
      <h1 className="adminCreateNewsTitle">YENİ HABER OLUŞTUR</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="news_title">Haberin Başlığı</label>
        <input
          type="text"
          id="news_title"
          name="news_title"
          placeholder="Haberin Başlığını Girin."
          required={true}
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
        />
        <label htmlFor="">Haberin Kategorisini Seçin</label>
        <div className="adminCreateNewsMultiple">
          <input
            type="radio"
            id="create_book_fair"
            name="create_news"
            required={true}
            value="book-fair"
            onChange={(e) => setNewsCategory(e.target.value)}
            checked={newsCategory === "book-fair"}
          />
          <label htmlFor="create_book_fair">Kitap Fuarı</label>
          <input
            type="radio"
            id="create_book_to_movie"
            name="create_news"
            required={true}
            value="book-to-movie"
            onChange={(e) => setNewsCategory(e.target.value)}
            checked={newsCategory === "book-to-movie"}
          />
          <label htmlFor="create_book_to_movie">Filmlere Uyarlanan Kitap</label>
          <input
            type="radio"
            id="create-newbook"
            name="create_news"
            required={true}
            value="newbook"
            onChange={(e) => setNewsCategory(e.target.value)}
            checked={newsCategory === "newbook"}
          />
          <label htmlFor="create-newbook">Yeni Yayımlanan Kitap</label>
        </div>
        <label htmlFor="news_desc">Haber Hakkında Açıklama</label>
        <textarea
          rows="5"
          cols="20"
          name="news_desc"
          id="news_desc"
          placeholder="Haber Hakkında Açıklama Girin."
          value={newsDesc}
          onChange={(e) => setNewsDesc(e.target.value)}
        ></textarea>
        <button
          className="adminCreateAuthorSubmit"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? <LoadingComp button /> : "Yeni Haber Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default AdminCreateNews;
