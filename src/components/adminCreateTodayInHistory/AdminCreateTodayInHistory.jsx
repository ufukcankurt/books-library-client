import "./adminCreateTodayInHistory.css";
import React, { useState } from "react";
import AdminCreateGetAuthor from "../adminCreateGetAuthor/AdminCreateGetAuthor";
import LoadingComp from "../loadingComp/LoadingComp";
import MyAlertComp from "../../components/myAlertComp/MyAlertComp";
import axios from "axios";

const AdminCreateTodayInHistory = ({ currentUser }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const [bookAuthor, setBookAuthor] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [quote, setQuote] = useState("");
  const [date, setDate] = useState("");
  const [quoteCategory, setQuoteCategory] = useState("");

  const resetStates = () => {
    setSelectedAuthor(null);
    setBookAuthor("");
    setQuote("");
    setDate("");
    setQuoteCategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const createNewBook = async () => {
      try {
        const res = await axios.post(
          `${FETCH}todayInHistory`,
          {
            authorName: selectedAuthor.authorName,
            authorImg: selectedAuthor.authorImg,
            quote: quote,
            type: quoteCategory,
            date: date,
          },
          {
            headers: {
              token: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        setIsVisible(true);
        setMessage("Alıntı Başarıyla Eklendi...");
        setIsFetching(false);
        res.status === 201 && resetStates();
      } catch (error) {
        console.log(error);
      }
    };

    createNewBook();
  };

  return (
    <div className="adminCreateTodayInHistoryContainer">
        {isVisible === true ? (
        <MyAlertComp
          danger={isError ? "danger" : ""}
          message={message}
          setIsError={setIsError}
          setIsVisible={setIsVisible}
        />
      ) : (
        ""
      )}
      <h1 className="adminCreateTodayInHistoryTitle">YENİ ALINTI OLUŞTUR</h1>
      <form onSubmit={handleSubmit}>
        <AdminCreateGetAuthor
          currentUser={currentUser}
          bookAuthor={bookAuthor}
          setBookAuthor={setBookAuthor}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
        <label htmlFor="today_desc">Alıntıyı Oluşturun</label>
        <textarea
          rows="5"
          cols="20"
          name="today_desc"
          id="today_desc"
          placeholder="Alıntıyı Girin."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        ></textarea>
        <label htmlFor="today_date">Tarih Girin</label>
        <input
          type="text"
          id="today_date"
          name="today_date"
          placeholder="AA-GG formatında bir tarih girin. (01-22)"
          required={true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="today_date">Alıntı Türü Seçin</label>
        <div className="adminCreateTodayInHistoryMultiple">
          <input
            type="radio"
            id="create_quote_quote"
            name="create_news"
            required={true}
            value="quote"
            onChange={(e) => setQuoteCategory(e.target.value)}
            checked={quoteCategory === "quote"}
          />
          <label htmlFor="create_quote_quote">Alıntı</label>
          <input
            type="radio"
            id="create_quote_death"
            name="create_news"
            required={true}
            value="death"
            onChange={(e) => setQuoteCategory(e.target.value)}
            checked={quoteCategory === "death"}
          />
          <label htmlFor="create_quote_death">Ölüm Yıl Dönümü</label>
          <input
            type="radio"
            id="create_quote_born"
            name="create_news"
            required={true}
            value="born"
            onChange={(e) => setQuoteCategory(e.target.value)}
            checked={quoteCategory === "born"}
          />
          <label htmlFor="create_quote_born">Doğum Yıl Dönümü</label>
        </div>
        <button
          className="adminCreateAuthorSubmit"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? <LoadingComp button /> : "Yeni Alıntı Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default AdminCreateTodayInHistory;
