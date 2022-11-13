import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import "./news.css";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const News = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}news/all/news`);
    setNews(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const Loader = () => {
    return (
      <div className="BooksLoader">
        <LoadingComp />
      </div>
    );
  };

  return (
    <>
      <div className="newsContainer">
        {isLoading ? <Loader /> : <NewsFeed news={news} />}

        <NewsRightBar />
      </div>
    </>
  );
};

export default News;
