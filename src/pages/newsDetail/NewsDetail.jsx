import Nav from "../../components/nav/Nav";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import NewsPost from "../../components/newsPost/NewsPost";
import NewsRightBar from "../../components/newsRightBar/NewsRightBar";
import "./newsDetail.css";

const NewsDetail = () => {
  return (
    <>
      <Nav />
      <div className="newsDetailContainer">
        <div className="newsDetailContainer">
          <div className="newsDetailFeedContainer">
              <NewsPost single/>
          </div>
          <NewsRightBar />
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
