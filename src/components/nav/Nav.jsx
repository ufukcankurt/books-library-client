import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Search } from "@material-ui/icons";
import { useRef, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const Nav = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER+"users/";
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");
  const navSearchRef = useRef()
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = () => {};
  const handleLogout = () => {
    localStorage.setItem("user", null);
    window.location.reload();
  }

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  const handleFocus = () => {
    navSearchRef.current.style.display = "flex"
  };

  const handleBlur = () => {
    navSearchRef.current.style.display = "none"
  }

  return (
    <div className="navContainer">
      <div className="navContent">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navLogo">
            <img src="/assets/logouck.png" alt="" />
          </div>
        </Link>
        <div className="navSearch">
          <input
            type="text"
            id="search_button"
            name="search_button"
            placeholder="Uygulamada ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus= {handleFocus}
            onBlur= {handleBlur}
          />
          <button className="searchIcon" onClick={handleSubmit}>
            <Search />
          </button>
          <div ref={navSearchRef} className="navSearchModal">

          </div>
        </div>
        <div className="navLinks">
          <ul>
          <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/home.png"
                      alt=""
                    />
                    <span className="modalLink">Anasayfa</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/news_1.png"
                      alt=""
                    />
                    <span className="modalLink">Haberler</span>
                  </div>
                </Link>
              </li>
              
          </ul>
          <div className="navProfilePhoto" onClick={handleClick}>
            <img src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"} alt="" />
          </div>
          <div
            className="navModal"
            style={isClicked ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <Link to={`/${user.username}`} style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalProfilImage"
                      src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"}
                      alt=""
                    />
                    <span className="modalPrivate">{user.fullname}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/create-note" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/writing.png"
                      alt=""
                    />
                    <span className="modalPrivate">Özet & Alıntı Yaz</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/${user.username}/shelf/Okuduklarım`} style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/book_8.png"
                      alt=""
                    />
                    <span className="modalPrivate">Okuduğum Kitaplar</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/${user.username}/shelf/Okuyacaklarım`} style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/book_12.png"
                      alt=""
                    />
                    <span className="modalPrivate">Okuyacağım Kitaplar</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/${user.username}/reading-goal`} style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/bookgoal_3.png"
                      alt=""
                    />
                    <span className="modalPrivate">Okuma Hedeflerim</span>
                  </div>
                </Link>
              </li>
              <hr className="hrLink"/>
              <li>
                <Link to="/user/profile-settings" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/settings.png"
                      alt=""
                    />
                    <span className="modalPrivate">Kullanıcı Ayarları</span>
                  </div>
                </Link>
              </li>
              <li>
                {/* <Link  to="/login" style={{ textDecoration: "none" }}> */}
                  <div onClick={handleLogout} className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/logout.png"
                      alt=""
                    />
                    <span className="modalPrivate">Çıkış Yap</span>
                  </div>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
