import "./todayInHistory.css";

const TodayInHistory = ({ quote }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "authors/";

  const TodayInHistoryComp = () => {
    return (
      <>
        <div className="todayInHistoryStatus">
          {quote?.type === "death" ? "Ölüm Yıl Dönümü" : "Doğum Günü"}
        </div>
      </>
    );
  };

  return (
    <div className="todayInHistoryContainer">
      {quote?.type === "quote" ? (
        <div className="todayInHistoryStatus">Günün Sözü</div>
      ) : (
        <TodayInHistoryComp />
      )}
      <div className="todayInHistoryContent">
        <div className="todayInHistoryImg">
          <img src={`${PF}${quote.authorImg}`} alt="" />
        </div>
        <p className="todayInHistoryAuthorName">{quote.authorName}</p>
      </div>

      <div className="todayInHistoryQuote">"{quote.quote}"</div>
    </div>
  );
};

export default TodayInHistory;
