import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "@material-ui/icons";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {};

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="navContainer">
      <div className="navContent">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navLogo">
            <img src="/assets/logo.png" alt="" />
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
          />
          <button className="searchIcon" onClick={handleSubmit}>
            <Search />
          </button>
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
            <img src="https://imgur.com/H07Fxdh.jpeg" alt="" />
          </div>
          <div
            className="navModal"
            style={isClicked ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <Link to="/ufukcankurt" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalProfilImage"
                      src="https://imgur.com/H07Fxdh.jpeg"
                      alt=""
                    />
                    <span className="modalPrivate">Ufuk Can Kurt</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <div className="modalDiv">
                    <img
                      className="modalImage"
                      src="/assets/logout.png"
                      alt=""
                    />
                    <span className="modalPrivate">Çıkış Yap</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
