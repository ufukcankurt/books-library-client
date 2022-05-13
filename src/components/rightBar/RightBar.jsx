import "./rightBar.css";
import { Link } from "react-router-dom";
import ReadingGoal from "../readingGoal/ReadingGoal";
import TodayInHistory from "../todayInHistory/TodayInHistory";

const RightBar = ({profile}) => {
  const ProfileRightBar = () => {
    return (
      <div className="rightBarLinkContent">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
        
      {profile ? <ReadingGoal/> : <></>}
      {profile ? <ProfileRightBar /> : <HomeRightBar/>}
    </div>
  );
};

export default RightBar;
