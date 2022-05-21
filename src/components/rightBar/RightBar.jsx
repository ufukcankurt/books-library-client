import "./rightBar.css";
import { Link } from "react-router-dom";
import ReadingGoal from "../readingGoal/ReadingGoal";
import TodayInHistory from "../todayInHistory/TodayInHistory";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const RightBar = ({profile, readingTarget, user}) => {
  const {user:currentUser} = useContext(AuthContext);
  const ProfileRightBar = () => {
    return (
      <div className="rightBarLinkContent">
        <ul>
          <li>
            <Link to={`/${currentUser.username}/notes`} style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/book_13.png"
                  alt=""
                />
                <span className="rightbarLink">Özetlerim ve notlarım</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/create-note" style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/writing.png"
                  alt=""
                />
                <span className="rightbarLink">Özet & Alıntı Yaz</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/${currentUser.username}/reading-goal`} style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/bookgoal_3.png"
                  alt=""
                />
                <span className="rightbarLink">Okuma Hedeflerim</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/${currentUser.username}/shelf`} style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/bookshelf_1.png"
                  alt=""
                />
                <span className="rightbarLink">Kitaplarım</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/${currentUser.username}/shelf/okuyacaklarım`} style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/book_8.png"
                  alt=""
                />
                <span className="rightbarLink">Okuduğum Kitaplar</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/${currentUser.username}/shelf/okuyacaklarım`} style={{ textDecoration: "none" }}>
              <div className="rightBarLinksDiv">
                <img
                  className="rightBarLinkImage"
                  src="/assets/book_12.png"
                  alt=""
                />
                <span className="rightbarLink">Okuyacağım Kitaplar</span>
              </div>
            </Link>
          </li>
          
        </ul>
      </div>
    );
  };

  const HomeRightBar = () => {
      return (
          <div className="homeRightBarContent">
              <h2 className="homeRightBarTitle">Tarihte Bugün</h2>
              <TodayInHistory/>
              <TodayInHistory/>
          </div>
      )
  }

  return (
    <div className="rightBarContainer">
        
      {profile ? <ReadingGoal readingTarget={readingTarget} user={user} /> : <></>}
      {profile ? <ProfileRightBar /> : <HomeRightBar/>}
    </div>
  );
};

export default RightBar;
