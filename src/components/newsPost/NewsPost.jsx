import { Link } from "react-router-dom";
import "./newsPost.css";

const NewsPost = ({ single }) => {
  const SinglePost = () => {
    return (
      <p className="newsPostSingleText">
        2022 Pandemi nedeniyle iki yıldır ertelenen TÜYAP Kitap Fuarı 2022
        yılında nihayet okurlara kapılarını açacak. TÜYAP Tüm Fuarcılık Yapım
        A.Ş. tarafından Türkiye Yayıncılar Birliği işbirliğinde hazırlanan 39.
        Uluslararası İstanbul Kitap Fuarı, 3-11 Aralık 2022 tarihleri arasında
        TÜYAP Fuar ve Kongre Merkezi-Büyükçekmece’de düzenlenecek. 2022 Pandemi
        nedeniyle iki yıldır ertelenen TÜYAP Kitap Fuarı 2022 yılında nihayet
        okurlara kapılarını açacak. TÜYAP Tüm Fuarcılık Yapım A.Ş. tarafından
        Türkiye Yayıncılar Birliği işbirliğinde hazırlanan 39. Uluslararası
        İstanbul Kitap Fuarı, 3-11 Aralık 2022 tarihleri arasında TÜYAP Fuar ve
        Kongre Merkezi-Büyükçekmece’de düzenlenecek. 2022 Pandemi nedeniyle iki
        yıldır ertelenen TÜYAP Kitap Fuarı 2022 yılında nihayet okurlara
        kapılarını açacak. TÜYAP Tüm Fuarcılık Yapım A.Ş. tarafından Türkiye
        Yayıncılar Birliği işbirliğinde hazırlanan 39. Uluslararası İstanbul
        Kitap Fuarı, 3-11 Aralık 2022 tarihleri arasında TÜYAP Fuar ve Kongre
        Merkezi-Büyükçekmece’de düzenlenecek. 2022 Pandemi nedeniyle iki yıldır
        ertelenen TÜYAP Kitap Fuarı 2022 yılında nihayet okurlara kapılarını
        açacak. TÜYAP Tüm Fuarcılık Yapım A.Ş. tarafından Türkiye Yayıncılar
        Birliği işbirliğinde hazırlanan 39. Uluslararası İstanbul Kitap Fuarı,
        3-11 Aralık 2022 tarihleri arasında TÜYAP Fuar ve Kongre
        Merkezi-Büyükçekmece’de düzenlenecek. 2022 Pandemi nedeniyle iki yıldır
        ertelenen TÜYAP Kitap Fuarı 2022 yılında nihayet okurlara kapılarını
        açacak. TÜYAP Tüm Fuarcılık Yapım A.Ş. tarafından Türkiye Yayıncılar
        Birliği işbirliğinde hazırlanan 39. Uluslararası İstanbul Kitap Fuarı,
        3-11 Aralık 2022 tarihleri arasında TÜYAP Fuar ve Kongre
        Merkezi-Büyükçekmece’de düzenlenecek.
      </p>
    );
  };

  const AllPost = () => {
    return (
      <>
        <p className="newsPostText">
          2022 Pandemi nedeniyle iki yıldır ertelenen TÜYAP Kitap Fuarı 2022
          yılında nihayet okurlara kapılarını açacak. TÜYAP Tüm Fuarcılık Yapım
          A.Ş. tarafından Türkiye Yayıncılar Birliği işbirliğinde hazırlanan 39.
          Uluslararası İstanbul Kitap Fuarı, 3-11 Aralık 2022 tarihleri arasında
          TÜYAP Fuar ve Kongre Merkezi-Büyükçekmece’de düzenlenecek. 2022
          Pandemi nedeniyle iki yıldır ertelenen TÜYAP Kitap Fuarı 2022 yılında
          nihayet okurlara kapılarını açacak. TÜYAP Tüm Fuarcılık Yapım A.Ş.
          tarafından Türkiye Yayıncılar Birliği işbirliğinde hazırlanan 39.
          Uluslararası İstanbul Kitap Fuarı, 3-11 Aralık 2022 tarihleri arasında
          TÜYAP Fuar ve Kongre Merkezi-Büyükçekmece’de düzenlenecek.
        </p>
      </>
    );
  };

  return (
   
      <div className="newsPostContainer">
        <div className="newsPostTopside">
          <Link to="/news/123" style={{ textDecoration: "none", color: "inherit" }}>
            <p className="newsPostTitle">
              17. Ankara Kitap Fuarı ATO Congresium, 18-27 mart 2022
            </p>
          </Link>
          <p className="newsPostTimeago">10.05.2022 - 15.00</p>
        </div>
        <Link to="/news/123" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="newsPostMid">
            <img src="/assets/news/news_1.jpg" alt="" />
          </div>
        </Link>
        <div className="newsPostBottom">
          {single ? <SinglePost /> : <AllPost />}
        </div>
      </div>
  );
};

export default NewsPost;
