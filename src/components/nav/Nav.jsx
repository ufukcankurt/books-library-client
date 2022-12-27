import "./nav.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import SearchComp from "../searchComp/SearchComp";
import { ThemeContext } from "../../context/themeContext/ThemeContext";

const Nav = ({ setIsThemeDark }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "users/";
  const [isClicked, setIsClicked] = useState(false);
  const { user } = useContext(AuthContext);
  const { isDark, dispatch } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.setItem("user", null);
    window.location.reload();
  };

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  const AdminLink = () => {
    return (
      <>
        <li className="navModalLi">
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <div className="modalDiv">
              <img className="modalImage" src="/assets/admin.png" alt="" />
              <span className="modalPrivate">Admin Paneli</span>
            </div>
          </Link>
        </li>
      </>
    );
  };

  console.log("isDarkkk:", isDark);

  const handleTheme = async () => {
    await dispatch({ type: "CHANGE_THEME", payload: isDark ? false : true });
    await setIsThemeDark(isDark ? false : true);
  }

  return (
    <div className="navContainer">
      <div className="navContent">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navLogo">
            <img src="/assets/logouck.png" alt="" />
          </div>
        </Link>

        <SearchComp message={"Kişi veya kitap ara"} />

        <div className="navLinks">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="modalDiv">
                  <img className="modalImage" src="/assets/home.png" alt="" />
                  <span className="modalLink">Anasayfa</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/news" style={{ textDecoration: "none" }}>
                <div className="modalDiv">
                  <img className="modalImage" src="/assets/news_1.png" alt="" />
                  <span className="modalLink">Haberler</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/books" style={{ textDecoration: "none" }}>
                <div className="modalDiv">
                  <img
                    className="modalImage"
                    src="/assets/book_12.png"
                    alt=""
                  />
                  <span className="modalLink">Kitaplar</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="navProfilePhoto" onClick={handleClick}>
            <img src={user?.profilePicture} alt="" />
          </div>
          <div
            className="navModal"
            style={isClicked ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li className="navModalLi">
                <Link
                  to={`/${user?.username}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="modalDiv">
                    <img
                      className="modalProfilImage"
                      src={user?.profilePicture}
                      alt=""
                    />
                    <span className="modalPrivate">{user?.fullname}</span>
                  </div>
                </Link>
              </li>
              <li className="navModalLi">
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
              <li className="navModalLi">
                <Link
                  to={`/${user?.username}/shelf/Okuduklarım`}
                  style={{ textDecoration: "none" }}
                >
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
              <li className="navModalLi">
                <Link
                  to={`/${user?.username}/shelf/Okuyacaklarım`}
                  style={{ textDecoration: "none" }}
                >
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
              <li className="navModalLi">
                <Link
                  to={`/${user?.username}/reading-goal`}
                  style={{ textDecoration: "none" }}
                >
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
              {/* <hr className="hrLink" /> */}
              {user?.isAdmin ? <AdminLink /> : ""}
              <li className="navModalLi">
                <Link
                  to="/user/profile-settings"
                  style={{ textDecoration: "none" }}
                >
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
              <li className="navModalLi">

                <div onClick={handleTheme} className="modalDiv">
                  <img className="modalImage" src={`/assets/${isDark ? "lightmode.png" : "darkmode.png"}`} alt="" />
                  <span className="modalPrivate">{isDark ? "Light Mode" : "Dark Mode"}</span>
                </div>

              </li>
              <li className="navModalLi">

                <div onClick={handleLogout} className="modalDiv">
                  <img className="modalImage" src="/assets/logout.png" alt="" />
                  <span className="modalPrivate">Çıkış Yap</span>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
