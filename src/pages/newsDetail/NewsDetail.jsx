import Nav from "../../components/nav/Nav";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsPost from "../../components/newsPost/NewsPost";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import "./newsDetail.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const NewsDetail = () => {
  const { user: currentUser } = useContext(AuthContext);
  const { newsId } = useParams();

  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`${FETCH}news/${newsId}`, {
        headers: {
          token: `Bearer ${currentUser.accessToken}`,
        },
      });
      setNews(res.data);
    };
    fetchNews();
  }, [newsId]);

  return (
    <>
      <Nav />
      <div className="newsDetailContainer">
        <div className="newsDetailContainer">
          <div className="newsDetailFeedContainer">
            <NewsPost news={news} single />
          </div>
          <NewsRightBar />
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
