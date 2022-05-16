import "./createNoteMain.css";
import { useState } from "react";

const CreateNoteMain = () => {
  const [noteForm, setNoteForm] = useState({
    character: "",
    summary: "",
    quotes: "",
    private: "",
  });

  const handleChange = (e) => {
    setNoteForm((prevState)=> ( {
        ...prevState,
        [e.target.name]:e.target.value
      }))
  };

  console.log(noteForm);
  console.log("charac:", noteForm.character);

  return (
    <div className="createNoteMainContainer">
      <div className="createNoteMainBookInfoContent">
        <div className="createNoteMainBookImg">
          <img src="/assets/books/book_2.jpg" alt="" />
        </div>
        <div className="createNoteMainBookInfo">
          <p className="createNoteMainBookName">Köpek Kalbi</p>
          <p className="createNoteMainBookAuthor">Mihail Bulgakov</p>
          <p className="createNoteMainBookPage">150 Sayfa</p>
          <p className="createNoteMainBookDate">20.01.2000</p>
        </div>
      </div>
      <form>
        <div className="createNoteMainCharacters">
          <label htmlFor="character">Karakterler</label>
          <textarea
            name="character"
            id="character"
            cols="30"
            rows="10"
            value={noteForm.character}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainSummary">
          <label htmlFor="summary">Kitabın Özeti & Notları</label>
          <textarea
            name="summary"
            id="summary"
            cols="30"
            rows="10"
            value={noteForm.summary}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainQuotes">
          <label htmlFor="quotes">Kitaptan Alıntılar</label>
          <textarea
            name="quotes"
            id="quotes"
            cols="30"
            rows="10"
            value={noteForm.quotes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="createNoteMainPrivate">
            <div className="createNoteMainPrivateInfoTextContent">
            <label htmlFor="private">Kullanıcıya Özel Alan</label>
            <p className="createNoteMainPrivateInfoText">▪ Bu alana yazdıklarınızı sadece siz görürsünüz.</p>
            </div>
          
          <textarea
            name="private"
            id="private"
            cols="30"
            rows="10"
            value={noteForm.private}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="createNoteMainSubmitButton" type="submit" value="Kaydet" />
      </form>
    </div>
  );
};

export default CreateNoteMain;
