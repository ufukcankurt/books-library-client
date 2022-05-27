import "./newsRightBar.css";
import { Link } from "react-router-dom";

const NewsRightBar = () => {
  return (
    <div className="newsRightBarContainer">
      <h2 className="newsFeedTitle">Kategoriler</h2>
      <ul>
        <li>
          <Link to={`/news`} style={{ textDecoration: "none" }}>
            <div className="newsRightBarLinksDiv">
              <img
                className="newsRightBarLinkImage"
                src="/assets/news_2.png"
                alt=""
              />
              <span className="newsRightBarLink">Tüm Haberler</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/news/category/book-fair`}
            style={{ textDecoration: "none" }}
          >
            <div className="newsRightBarLinksDiv">
              <img
                className="newsRightBarLinkImage"
                src="/assets/book_13.png"
                alt=""
              />
              <span className="newsRightBarLink">Kitap Fuarları</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/news/category/newbook`}
            style={{ textDecoration: "none" }}
          >
            <div className="newsRightBarLinksDiv">
              <img
                className="newsRightBarLinkImage"
                src="/assets/book_12.png"
                alt=""
              />
              <span className="newsRightBarLink">Yeni Yayımlanan Kitaplar</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/news/category/book-to-movie`}
            style={{ textDecoration: "none" }}
          >
            <div className="newsRightBarLinksDiv">
              <img
                className="newsRightBarLinkImage"
                src="/assets/movie_1.png"
                alt=""
              />
              <span className="newsRightBarLink">
                Filmlere Uyarlanan Kitaplar
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsRightBar;
