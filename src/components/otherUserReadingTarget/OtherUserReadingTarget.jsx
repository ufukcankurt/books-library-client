import "./otherUserReadingTarget.css";
import { CircleProgress } from "react-gradient-progress";
import { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import axios from "axios";

const OtherUserReadingTarget = ({ users }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [readingTarget, setReadingTarget] = useState(user?.readingTarget);
  const [readCount, setReadCount] = useState(0);
  const [readLastYearCount, setReadLastYearCount] = useState(0);
  const [readAllPages, setReadAllPages] = useState(0);
  const percent = Math.floor((readCount / user.readingTarget) * 100);
  const given = moment("2023-01-01", "YYYY-MM-DD");
  const current = moment().startOf("day");
  const leftDays = moment.duration(given.diff(current)).asDays();
  const soFar = 365 - Number(leftDays);
  const haveToReadPerBook = Math.round(365 / user.readingTarget); // examples : you have to read a book in a every four days
  const shouldHaveRead = Math.round(soFar / haveToReadPerBook);
  const result = readLastYearCount - shouldHaveRead;

  useEffect(() => {
    try {
        const fetchUser = async () => {
            const res = await axios.get(`${FETCH}users?username=${username}`);
            setUser(res.data);
            setReadingTarget(res.data?.readingTarget);
          };
          fetchUser();
    } catch (error) {
        console.log(error);
    }
  }, [username, FETCH]);

  useEffect(() => {
    const getCount = () => {
      user.bookShelf?.map((book) => {
        if (book.bookStatus === "finished") {
          setReadCount((prev) => prev + 1);
        }
        if (book.bookStatus === "finished" && book.bookEnd?.includes("2022")) {
          setReadLastYearCount((prev) => prev + 1);
          setReadAllPages((prev) => prev + book.bookPage);
        }
        return "";
      });
    };
    getCount();
  }, [user.bookShelf]);

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
            {users ? readingTarget : user.readingTarget} / {readLastYearCount}
          </h2>
        </div>
        <div className="readingGoalProgress">
          <div>{users ? <UserReadingGoalProgress /> : ""}</div>
          <div className="readingGoalInfo">
            <p className="readingGoalReadedCount">{readLastYearCount} kitap</p>
            <p className="readingGoalReadedCount">{readAllPages} sayfa</p>
            <p className="readingGoalStatus">
              {result < 0 ? Math.abs(result) + " kitap geridesin!" : ""}
              {result > 0 ? result + " kitap ileridesin!" : ""}
              {result === 0 ? "tam isabet!" : ""}
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="readingGoalContainer">
      {user.readingTarget ? <YesTargetComp /> : <NoTargetComp />}
    </div>
  );
};

export default OtherUserReadingTarget;
