import "./readingGoal.css";
import { CircleProgress } from "react-gradient-progress";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import moment from "moment";

const ReadingGoal = ({ users, user, readingTarget}) => {
  const { user: currentUser } = useContext(AuthContext);
  const [readCount, setReadCount] = useState(0);
  const [readLastYearCount, setReadLastYearCount] = useState(0);
  const [readAllPages, setReadAllPages] = useState(0);
  const percent = Math.floor((readCount / currentUser.readingTarget ) * 100)
  const given = moment("2023-01-01", "YYYY-MM-DD");
  const current = moment().startOf("day");
  const leftDays = moment.duration(given.diff(current)).asDays();
  const soFar =( 365 - Number(leftDays))
  const haveToReadPerBook = Math.round((365 / currentUser.readingTarget)) // examples : you have to read a book in a every four days
  const shouldHaveRead = Math.round((soFar / haveToReadPerBook))
  const result = (readLastYearCount - shouldHaveRead)
  

  useEffect(()=> {
    const getCount = () => {
      currentUser.bookShelf?.map((book)=> {

        if(book.bookStatus === "finished"){
          setReadCount((prev) => prev + 1)
        }
         if(book.bookStatus === "finished" && book.bookEnd?.includes("2022")){
          setReadLastYearCount((prev) => prev + 1)
          setReadAllPages((prev) => prev + book.bookPage)
         }
         return ""
      })
      // currentUser.bookShelf?.map((book)=> book.bookStatus === "finished" && book.bookEnd?.includes("2022")? setReadLastYearCount((prev) => prev + 1):"")
    }
    getCount()
  },[currentUser.bookShelf])

  console.log("readCount", readCount);
  console.log("readLastYearCount", readLastYearCount);
  console.log("readAllPages", readAllPages);
  console.log("percent", percent);
  console.log("soFar", soFar);
  console.log("leftDays", leftDays);
  console.log("haveToReadPerBook", haveToReadPerBook);
  console.log("shouldHaveRead", shouldHaveRead);
  console.log("result", result);
  

  const UserReadingGoalProgress = () => {
    return (
      <CircleProgress
        percentage={percent}
        strokeWidth={8}
        width={200}
        secondaryColor={"gray"}
      />
    );
  };

  const LeftRightSides = () => {
    return (
      <CircleProgress
        percentage={percent}
        strokeWidth={8}
        width={110}
        secondaryColor={"gray"}
      />
    );
  };

  const NoTargetComp = () => {
    return (
      <>
        <div className="readingGoalTitles">
          <h2 className="readingGoalTitle">2022 Okuma Hedefi </h2>
        </div>
        <div className="readingGoalProgress">
          <p className="readingGoalNoTargetMessage">
            Henüz Hedef Belirlenmedi!
          </p>
        </div>
      </>
    );
  };

  const YesTargetComp = () => {
    return (
      <>
        <div className="readingGoalTitles">
          <h2 className="readingGoalTitle">2022 Okuma Hedefi </h2>
          <h2 className="readingGoalCountTitle">
            {" "}
            {users ? readingTarget : currentUser.readingTarget} / {readLastYearCount}
          </h2>
        </div>
        <div className="readingGoalProgress">
          <div>{users ? <UserReadingGoalProgress /> : <LeftRightSides />}</div>
          <div className="readingGoalInfo">
            <p className="readingGoalReadedCount">{readLastYearCount} kitap</p>
            <p className="readingGoalReadedCount">{readAllPages} sayfa</p>
            <p className="readingGoalStatus"> 
            
            {result < 0 ? Math.abs(result) + " kitap geridesin!": ""}
            {result > 0 ? result + " kitap ileridesin!": ""}
            {result === 0 ? "tam isabet!": ""}
            </p>
          </div>
        </div>
      </>
    );
  };

  const ReadingGoalSettingsComp = () =>{
    return (
      <>
      <Link to={`/${currentUser.username}/reading-goal`}>
        <div className="readingGoalSettings">
          <Settings />
        </div>
      </Link>
      </>
    )
  }

  return (
    <div className="readingGoalContainer">
      
      {currentUser.readingTarget ? "": <ReadingGoalSettingsComp />}
      {currentUser.readingTarget ? <YesTargetComp /> : <NoTargetComp />}
    </div>
  );
};

export default ReadingGoal;
