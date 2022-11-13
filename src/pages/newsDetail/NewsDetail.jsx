import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsPost from "../../components/newsPost/NewsPost";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import "./newsDetail.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const NewsDetail = () => {
  const { user: currentUser } = useContext(AuthContext);
  const { newsId } = useParams();

  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await axios.get(`${FETCH}news/${newsId}`, {
      headers: {
        token: `Bearer ${currentUser.accessToken}`,
      },
    });
    setNews(res.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchNews();
  }, [newsId]);

  return (
    <>
      <div className="newsDetailContainer">
        <div className="newsDetailContainer">
          <div className="newsDetailFeedContainer">
            {isLoading ? <LoadingComp /> : <NewsPost news={news} single />}
          </div>
          <NewsRightBar />
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
