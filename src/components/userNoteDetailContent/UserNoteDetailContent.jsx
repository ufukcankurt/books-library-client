import "./userNoteDetailContent.css";
import React from "react";

function UserNoteDetailContent() {
  const author = "Köpek Kalbi";
  const bookTitle = "Mihail Bulgakov";

  return (
    <div className="userNoteDetailContentContainer">
      <div className="userNoteDetailContentBookDetail">
        <div className="userNoteDetailContentBookInfo">
          <div className="userNoteDetailContentBookTitles">
            <p className="userNoteDetailContentBookName">
              {bookTitle} - {author}{" "}
            </p>
          </div>
          <p className="userNoteDetailContentBookPage">150 Sayfa</p>
          <p className="userNoteDetailContentBookDate">20.02.2000</p>
        </div>
        <div className="userNoteDetailContentBookImg">
          <img src="/assets/books/book_2.jpg" alt="" />
        </div>
      </div>
      <div className="userNoteDetailContentBookTextContent">
        <p className="userNoteDetailContentBookTitle">Karakterler</p>
        <div className="userNoteDetailContentBookCharacters">
          Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
          çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve
          yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü
          Bülbülü Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş
          güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme
          hikâyesi. 
        </div>

        <p className="userNoteDetailContentBookTitle">
          Kitabın Özeti & Notları
        </p>
        <div className="userNoteDetailContentBookSummary">
          Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
          çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve
          yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü
          Bülbülü Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş
          güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme
          hikâyesi. Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında
          haksız yere korkunç bir suçla suçlanan bir “zenci”yi savunmak için her
          şeyi riske atan bir adamın hikâyesi çocuk kahramanın gözünden
          anlatılıyor. Şefkat dolu, dramatik ve düşündürücü Bülbülü Öldürmek
          okurları insan doğasının köklerine; masumiyet ve deneyime, nezaket ve
          zulme, sevgi ve nefrete, mizah ve pathosa götürüyor. Harper Lee'nin
          her zaman basit bir aşk hikâyesi olarak gördüğü romanı bugün Amerikan
          edebiyatının bir şaheseri olarak kabul ediliyor.
        </div>

        <p className="userNoteDetailContentBookTitle">Kitaptan Alıntılar</p>
        <div className="userNoteDetailContentBookQuotes">
          Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
          çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve
          yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü
          Bülbülü Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş
          güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme
          hikâyesi. Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında
          haksız yere korkunç bir suçla suçlanan bir “zenci”yi savunmak için her
          şeyi riske atan bir adamın hikâyesi çocuk kahramanın gözünden
          anlatılıyor. Şefkat dolu, dramatik ve düşündürücü Bülbülü Öldürmek
          okurları insan doğasının köklerine; masumiyet ve deneyime, nezaket ve
          zulme, sevgi ve nefrete, mizah ve pathosa götürüyor. Harper Lee'nin
          her zaman basit bir aşk hikâyesi olarak gördüğü romanı bugün Amerikan
          edebiyatının bir şaheseri olarak kabul ediliyor.
        </div>

        <p className="userNoteDetailContentBookTitle">Özel Notlar</p>
        <div className="userNoteDetailContentBookPrivateNotes">
          Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile
          çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve
          yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü
          Bülbülü Öldürmek, Amerika'nın acımasız bir önyargı ile zehirlenmiş
          güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme
          hikâyesi. Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında
          haksız yere korkunç bir suçla suçlanan bir “zenci”yi savunmak için her
          şeyi riske atan bir adamın hikâyesi çocuk kahramanın gözünden
          anlatılıyor. Şefkat dolu, dramatik ve düşündürücü Bülbülü Öldürmek
          okurları insan doğasının köklerine; masumiyet ve deneyime, nezaket ve
          zulme, sevgi ve nefrete, mizah ve pathosa götürüyor. Harper Lee'nin
          her zaman basit bir aşk hikâyesi olarak gördüğü romanı bugün Amerikan
          edebiyatının bir şaheseri olarak kabul ediliyor.
        </div>
      </div>
    </div>
  );
}

export default UserNoteDetailContent;
