import { Link } from "react-router-dom";
import { useState } from "react";
import "./post.css";

const Post = ({ postDetail }) => {
  const [postType, setPostType] = useState("summary");

  const TimelineAllPost = () => {
    return (
      <p className="postBookTextTimeline">
        Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
        çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve yirminci
        yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü Bülbülü
        Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş güneyinde
        geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme hikâyesi.
        Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında haksız yere
        korkunç bir suçla suçlanan bir “zenci”yi savunmak için her şeyi riske
        atan bir adamın hikâyesi çocuk kahramanın gözünden anlatılıyor. Şefkat
        dolu, dramatik ve düşündürücü Bülbülü Öldürmek okurları insan doğasının
        köklerine; masumiyet ve deneyime, nezaket ve zulme, sevgi ve nefrete,
        mizah ve pathosa götürüyor. Harper Lee'nin her zaman basit bir aşk
        hikâyesi olarak gördüğü romanı bugün Amerikan edebiyatının bir şaheseri
        olarak kabul ediliyor.
      </p>
    );
  };

  const SinglePostDetail = () => {
    return (
      <p className="postBookTextSingle">
        Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
        çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve yirminci
        yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü Bülbülü
        Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş güneyinde
        geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme hikâyesi.
        Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında haksız yere
        korkunç bir suçla suçlanan bir “zenci”yi savunmak için her şeyi riske
        atan bir adamın hikâyesi çocuk kahramanın gözünden anlatılıyor. Şefkat
        dolu, dramatik ve düşündürücü Bülbülü Öldürmek okurları insan doğasının
        köklerine; masumiyet ve deneyime, nezaket ve zulme, sevgi ve nefrete,
        mizah ve pathosa götürüyor. Harper Lee'nin her zaman basit bir aşk
        hikâyesi olarak gördüğü romanı bugün Amerikan edebiyatının bir şaheseri
        olarak kabul ediliyor.
        <br/> <br/>
        Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
        çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve yirminci
        yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü Bülbülü
        Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş güneyinde
        geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme hikâyesi.
        Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında haksız yere
        korkunç bir suçla suçlanan bir “zenci”yi savunmak için her şeyi riske
        atan bir adamın hikâyesi çocuk kahramanın gözünden anlatılıyor. Şefkat
        dolu, dramatik ve düşündürücü Bülbülü Öldürmek okurları insan doğasının
        köklerine; masumiyet ve deneyime, nezaket ve zulme, sevgi ve nefrete,
        mizah ve pathosa götürüyor. Harper Lee'nin her zaman basit bir aşk
        hikâyesi olarak gördüğü romanı bugün Amerikan edebiyatının bir şaheseri
        olarak kabul ediliyor.

        <br/><br/>
        Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
        çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve yirminci
        yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü Bülbülü
        Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş güneyinde
        geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme hikâyesi.
        Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında haksız yere
        korkunç bir suçla suçlanan bir “zenci”yi savunmak için her şeyi riske
        atan bir adamın hikâyesi çocuk kahramanın gözünden anlatılıyor. Şefkat
        dolu, dramatik ve düşündürücü Bülbülü Öldürmek okurları insan doğasının
        köklerine; masumiyet ve deneyime, nezaket ve zulme, sevgi ve nefrete,
        mizah ve pathosa götürüyor. Harper Lee'nin her zaman basit bir aşk
        hikâyesi olarak gördüğü romanı bugün Amerikan edebiyatının bir şaheseri
        olarak kabul ediliyor.

      </p>
    );
  };

  return (
    <>
      <Link to="/post/123" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="PostContainer" style={postType === "summary" ? {backgroundColor:"rgba(240, 248, 255, 0.4)"} : {backgroundColor:"inherit"} }>
          <div className="postTopside">
            <div className="postUserInfo">
              <Link
                to="/ufukcankurt"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <img src="/assets/profile.jpg" alt="" className="postUserImg" />
              </Link>
              <div className="postUserNames">
                <Link
                  to="/ufukcankurt"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <p className="postUserFullname">Ufuk Can Kurt</p>
                  <p className="postUserUsername">@ufukcankurt</p>
                </Link>
              </div>
              <p className="postTimeago">▪ 30d </p>
            </div>
            <div className="postStatus">{postType === "summary" ? "Bir not ekledi." : "Bir kitabı okumaya başladı."}</div>
          </div>
          {postType === "summary" ? <TimelineAllPost /> : <></>}
          {postType === "summary" && postDetail ? <SinglePostDetail /> : <></>}
          <Link
            to="/book/123"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="postBookContainer">
              <div className="postBookImgDiv">
                <img
                  src="/assets/books/bulbulu_oldurmek.jpg"
                  alt=""
                  className="postBookImg"
                />
              </div>

              <div className="postBookInfo">
                <p className="postBookName">Bülbülü Öldürmek</p>
                <p className="postBookAuthor">Harper Lee</p>
                <p className="postBookPages">360 Sayfa</p>
              </div>
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};

export default Post;
