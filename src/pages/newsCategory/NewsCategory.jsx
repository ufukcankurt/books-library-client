import "./newsCategory.css";
import Nav from "../../components/nav/Nav";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const NewsCatergory = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}news/all/news/${categoryName}`);
    setNews(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchNews();
  }, [categoryName]);

  return (
    <>
      <Nav />
      <div className="newsCategoryContainer">
        {isLoading ? <LoadingComp /> : <NewsFeed news={news} />}
        <NewsRightBar />
      </div>
    </>
  );
};

export default NewsCatergory;
