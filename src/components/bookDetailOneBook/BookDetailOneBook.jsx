import "./bookDetailOneBook.css";
import BookStatusModal from "../bookStatusModal/BookStatusModal";
import { useState } from "react";

const BookDetailOneBook = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  } 
  return (
    <div className="bookDetailOneBookContainer">
      <div className="bookDetailOneBookButtons">
        <div className="bookDetailOneBookAddQuoteBtn">Not Ekle</div>
        <div className="bookDetailOneBookStatusBtn" onClick={handleClick}>Kitaplığıma Ekle</div>
        {isClicked ? <BookStatusModal isClicked={isClicked} setIsClicked={setIsClicked} /> : <></> }
      </div>
      <div className="bookDetailOneBookTopside">
        <div className="bookDetailOneBookImage">
          <img src="/assets/books/book_2.jpg" alt="" />
        </div>
        <div className="bookDetailOneBookContent">
          <div className="bookDetailOneBookDetail">
            <p className="bookDetailOneBookDetailName">Köpek Kalbi</p>
            <p className="bookDetailOneBookDetailAuthor">Mihail Bulgakov</p>
            <p className="bookDetailOneBookDetailPage">132 Sayfa</p>
            <p className="bookDetailOneBookDetailDate">
              12.05.2022 / 20.05.2022
            </p>
            <p className="bookDetailOneBookDetailType">Korku - Dram - Roman</p>
            <p className="bookDetailOneBookDetailEdition">
              2022 - Şubat - Türkiye İş Bankası Kültür Yayınları - (İlk
              yayınlanma:2000) - 9786051736938
            </p>
          </div>
        </div>
      </div>
      <div className="bookDetailOneBookBehindBook">
          <h2 className="bookDetailOneBookBehindBookTitle">Tanıtım Bülteni:</h2>
        <p className="bookDetailOneBookBehindBookText">
          1961 Pulitzer Edebiyat Ödülü <br />
          “İstediğin kadar saksağan vur vurabilirsen, ama unutma, bülbülü
          öldürmek günahtır.” <br />
          Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
          çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve
          yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü
          Bülbülü Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş
          güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme
          hikâyesi. Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında
          haksız yere korkunç bir suçla suçlanan bir “zenci”yi savunmak için her
          şeyi riske atan bir adamın hikâyesi çocuk kahramanın gözünden
          anlatılıyor. <br />
          Şefkat dolu, dramatik ve düşündürücü Bülbülü Öldürmek okurları insan
          doğasının köklerine; masumiyet ve deneyime, nezaket ve zulme, sevgi ve
          nefrete, mizah ve pathosa götürüyor. Harper Lee'nin her zaman basit
          bir aşk hikâyesi olarak gördüğü romanı bugün Amerikan edebiyatının bir
          şaheseri olarak kabul ediliyor. <br />
          “Lee estetiğin arkasına sığınmayı reddediyor. Kalemi öyle güzel,
          güçlü, ölçülü ki zor konuları doğrudan ele almak zorunda olmamasına
          rağmen Bülbülü Öldürmek'te tam olarak bunu yapmış.” <br />
          –Chimamanda Ngozi Adichie “Yaşama sevinciyle dolu, dokunaklı ve
          nadiren rastlayacağınız türden bir roman.” <br />
          –Truman Capote
        </p>
      </div>
      <p className="bookDetailOneBookOthersQuote">Diğer kullanıcıların yazdığı notlar</p>
    </div>
  );
};

export default BookDetailOneBook;
