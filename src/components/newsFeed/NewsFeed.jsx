import NewsPost from "../newsPost/NewsPost";
import "./newsFeed.css";

const NewsFeed = ({ news }) => {
  return (
    <div className="newsFeedContainer">
      <h1 className="newsFeedTitle">Haberler</h1>
      {news.map((item) => (
        <NewsPost news={item} />
      ))}
    </div>
  );
};

export default NewsFeed;
