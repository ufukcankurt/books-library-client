import "./adminCreateAuthor.css";
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
import AdminCreateAddImage from "../adminCreateAddImage/AdminCreateAddImage";
import LoadingComp from "../loadingComp/LoadingComp";
import MyAlertComp from "../../components/myAlertComp/MyAlertComp";

const AdminCreateAuthor = ({ currentUser }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [image, setImage] = useState(null);

  const [url, setUrl] = useState(null);
  const [isImageUpload, setIsImageUpload] = useState(false);

  const [authorName, setAuthorName] = useState("");
  const [authorTitle, setAuthorTitle] = useState("");
  const [authorBorn, setAuthorBorn] = useState("");
  const [authorDeath, setAuthorDeath] = useState("");
  const [authorBornPlace, setAuthorBornPlace] = useState("");
  const [authorDeathPlace, setAuthorDeathPlace] = useState("");
  const [authorDesc, setAuthorDesc] = useState("");

  const resetStates = () => {
    setAuthorName("");
    setAuthorTitle("");
    setAuthorBorn("");
    setAuthorDeath("");
    setAuthorBornPlace("");
    setAuthorDeathPlace("");
    setAuthorDesc("");
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    // UPLOAD THE AUTHOR PHOTO TO FIREBASE
    const sendDatatoFirebase = async () => {
      try {
        setIsVisible(true);
        setMessage("Resim Yükleniyor Lütfen Bekleyiniz...");
        setIsError(true);
        if (image) {
          const imageRef = ref(storage, `/authors/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image)
            .then(() => {
              getDownloadURL(imageRef)
                .then((url) => {
                  setUrl(url);
                  setIsImageUpload(true);
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
          `${FETCH}authors`,
          {
            authorName: authorName,
            authorTitle: authorTitle,
            authorImg: url,
            authorBorn: authorBorn,
            authorDeath: authorDeath,
            authorBornPlace: authorBornPlace,
            authorDeathPlace: authorDeathPlace,
            authorDesc: authorDesc,
          },
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        setIsVisible(true);
        setMessage("Yazar Başarıyla Eklendi...");
        setIsFetching(false);
        res.status === 201 && resetStates();
        res.status === 201 && window.location.reload();;
      } catch (error) {
        console.log(error);
      }
    };

    if (url !== null) {
      createNewBook();
    }
  }, [url]);

  return (
    <div className="adminCreateAuthorContainer">
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
      <h1 className="adminCreateAuthorTitle">YENİ YAZAR OLUŞTUR</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author_name">Yazarın İsmi</label>
        <input
          type="text"
          id="author_name"
          name="author_name"
          placeholder="Yazarın İsmini Girin."
          required={true}
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <label htmlFor="author_title">Yazarın Ünvanı</label>
        <input
          type="text"
          id="author_title"
          name="author_title"
          placeholder="Yazarın Ünvanını Girin."
          value={authorTitle}
          onChange={(e) => setAuthorTitle(e.target.value)}
        />
        <div className="adminCreateAuthorMultiple">
          <div className="adminCreateAuthorMultipleItem authorDate">
            <label htmlFor="author_born">Yazarın Doğum Tarihi</label>
            <input
              type="text"
              id="author_born"
              name="author_born"
              placeholder="GG.AA.YYYY"
              required={true}
              value={authorBorn}
              onChange={(e) => setAuthorBorn(e.target.value)}
            />
          </div>
          <div className="adminCreateAuthorMultipleItem authorPlace">
            <label htmlFor="author_deathPlace">Yazarın Doğum Yeri</label>
            <input
              type="text"
              id="author_deathPlace"
              name="author_deathPlace"
              placeholder="Yazarın Doğum Yeri Hakkında Bilgi Girin."
              required={true}
              value={authorBornPlace}
              onChange={(e) => setAuthorBornPlace(e.target.value)}
            />
          </div>
          <div className="adminCreateAuthorMultipleItem authorDate">
            <label htmlFor="author_death">Yazarın Ölüm Tarihi</label>
            <input
              type="text"
              id="author_death"
              name="author_death"
              placeholder="GG.AA.YYYY"
              required={true}
              value={authorDeath}
              onChange={(e) => setAuthorDeath(e.target.value)}
            />
          </div>
          <div className="adminCreateAuthorMultipleItem authorPlace">
            <label htmlFor="author_deathPlace">Yazarın Ölüm Yeri</label>
            <input
              type="text"
              id="author_deathPlace"
              name="author_deathPlace"
              placeholder="Yazarın Ölüm Yeri Hakkında Bilgi Girin."
              required={true}
              value={authorDeathPlace}
              onChange={(e) => setAuthorDeathPlace(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="author_desc">Yazar Hakkında Açıklama</label>
        <textarea
          rows="5"
          cols="20"
          name="author_desc"
          id="author_desc"
          placeholder="Yazar Hakkında Açıklama Girin."
          value={authorDesc}
          onChange={(e) => setAuthorDesc(e.target.value)}
        ></textarea>
        <button
          className="adminCreateAuthorSubmit"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? <LoadingComp button /> : "Yeni Yazar Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default AdminCreateAuthor;
