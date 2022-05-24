import "./booksFeed.css";
import BookShelf from "../bookShelf/BookShelf";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import AlertComp from "../alertComp/AlertComp";

const BooksFeed = ({ user }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isClicked, setIsClicked] = useState(false);
  const [newShelf, setNewShelf] = useState("");
  const [allShelf, setAllShelf] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [status, setStatus] = useState(2);
  const successMessage = "Yeni raf başarıyla eklendi.";
  const errorMessage = "Zaten bu raf mevcut";

  useEffect(() => {
    setAllShelf(user?.allShelfs);
  }, [user.allShelfs]);

  const handleChange = (e) => {
    setNewShelf(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allShelf.includes(newShelf)) {
      return alert(errorMessage);
    }
    allShelf.push(newShelf);
    // fetch request
    try {
      const res = await axios.put(
        `${FETCH}users/${currentUser._id}`,
        { allShelfs: allShelf },
        {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        }
      );
      dispatch({ type: "ADDNEWSHELF", payload: allShelf });
      setStatus(res.status);
    } catch (error) {
      console.log(error);
    }
  };

  const clickedHandleCreateNewShelf = (e) => {
    setIsClicked(!isClicked);
  };

  const CreateNewShefComp = () => {
    return (
      <div
        className="booksFeedNewShelfButton"
        onClick={clickedHandleCreateNewShelf}
      >
        Yeni Raf Ekle
      </div>
    );
  };

  return (
    <div className="booksFeedContainer">
      {status === 200 ? (
        <AlertComp status="success" message={successMessage} />
      ) : (
        ""
      )}
      <div className="booksFeedTop">
        <div className="booksFeedTopTitles">
          <h2 className="booksFeedTitle">Kitapları</h2>
          {user._id === currentUser._id ? <CreateNewShefComp /> : ""}
        </div>
        <div
          className="booksFeedNewShelfModal"
          style={isClicked ? { display: "flex" } : { display: "none" }}
        >
          <label htmlFor="new_shelf">Başlık</label>
          <input
            type="text"
            id="new_shelf"
            name="new_shelf"
            placeholder="Yeni Raf İsminizi Girin."
            required={true}
            value={newShelf}
            onChange={handleChange}
          />
          <div className="booksFeedCreateShelfButton" onClick={handleSubmit}>
            Oluştur
          </div>
        </div>
      </div>
      {user.allShelfs?.map((shelf, i) => (
        <BookShelf key={i} shelf={shelf} user={user} />
      ))}
    </div>
  );
};

export default BooksFeed;
