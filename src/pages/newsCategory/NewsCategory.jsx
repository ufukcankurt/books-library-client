import "./newsCategory.css";
import Nav from "../../components/nav/Nav";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsCatergory = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`${FETCH}news/all/news/${categoryName}`);
      setNews(res.data);
    };
    fetchNews();
  }, [categoryName]);

  return (
    <>
      <Nav />
      <div className="newsCategoryContainer">
        <NewsFeed news={news} />
        <NewsRightBar />
      </div>
    </>
  );
};

export default NewsCatergory;
