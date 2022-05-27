import Nav from "../../components/nav/Nav";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import "./news.css";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`${FETCH}news/all/news`);
      setNews(res.data);
    };
    fetchNews();
  }, []);

  return (
    <>
      <Nav />
      <div className="newsContainer">
        <NewsFeed news={news} />
        <NewsRightBar />
      </div>
    </>
  );
};

export default News;
