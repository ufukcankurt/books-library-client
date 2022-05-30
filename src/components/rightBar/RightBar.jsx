import "./rightBar.css";
import { Link } from "react-router-dom";
import ReadingGoal from "../readingGoal/ReadingGoal";
import TodayInHistory from "../todayInHistory/TodayInHistory";
import { AuthContext } from "../../context/authContext/AuthContext";
import moment from "moment";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import LoadingComp from "../loadingComp/LoadingComp";

const RightBar = ({ profile, readingTarget, user }) => {
  const { user: currentUser } = useContext(AuthContext);
  const FETCH = process.env.REACT_APP_FETCH_PATH;

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const todayDate = moment().format()?.split("T")[0];
    const todayDay = todayDate.split("-")[2];
    const todayMonth = todayDate.split("-")[1];
    const date = `${todayMonth}-${todayDay}`;
    const getQuotes = async () => {
      const res = await axios.get(`${FETCH}todayInHistory/all/${date}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setQuotes(res.data);
    };
    getQuotes();
    setIsLoading(false);
  }, []);

  const ProfileRightBar = () => {
    return (
      <div className="rightBarLinkContent">
        <ul>
          <li>
            <Link
              to={`/${currentUser.username}/notes`}
              style={{ textDecoration: "none" }}
            >
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
            <Link
              to={`/${currentUser.username}/reading-goal`}
              style={{ textDecoration: "none" }}
            >
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
            <Link
              to={`/${currentUser.username}/shelf`}
              style={{ textDecoration: "none" }}
            >
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
            <Link
              to={`/${currentUser.username}/shelf/Okuduklarım`}
              style={{ textDecoration: "none" }}
            >
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
            <Link
              to={`/${currentUser.username}/shelf/Okuyacaklarım`}
              style={{ textDecoration: "none" }}
            >
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
        {quotes?.map((quote) => (
          <TodayInHistory key={quote._id} quote={quote} />
        ))}
      </div>
    );
  };

  return (
    <div className="rightBarContainer">
      {isLoading ? <LoadingComp /> : <></>}
      {profile ? (
        <ReadingGoal readingTarget={readingTarget} user={user} />
      ) : (
        <></>
      )}
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
  );
};

export default RightBar;
