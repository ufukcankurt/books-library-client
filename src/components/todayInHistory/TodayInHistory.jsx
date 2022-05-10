import "./todayInHistory.css";

const TodayInHistory = () => {
  return (
    <div className="todayInHistoryContainer">
      <div className="todayInHistoryStatus">Ölüm Yıl Dönümü</div>
      <div className="todayInHistoryContent">
        <div className="todayInHistoryImg">
          <img src="./assets/authors/dostoyevski.jpg" alt="" />
        </div>
          <p className="todayInHistoryAuthorName">Fyodor Dostoyevski</p>
      </div>

      <div className="todayInHistoryQuote">
        "Oysa nerede o sözünü ettiğiniz mutluluk? Kim kendisinin mutlu olduğunu
        söyleyebilir?"
      </div>
    </div>
  );
};

export default TodayInHistory;
