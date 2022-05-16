import "./readingGoal.css";
import { CircleProgress } from "react-gradient-progress";

const ReadingGoal = ({user}) => {


  const UserReadingGoalProgress = () => {
    return (
      <CircleProgress
          percentage={80}
          strokeWidth={8}
          width={200}
          secondaryColor={"gray"}
        />
    )
  }

  const LeftRightSides = () => {
    return (
      <CircleProgress
          percentage={20}
          strokeWidth={8}
          width={110}
          secondaryColor={"gray"}
        />
    )
  }
 
  return (
    <div className="readingGoalContainer">
      <h2 className="readingGoalTitle">2022 Okuma Hedefi</h2>
      <div className="readingGoalProgress">
        <div>
        {user ? <UserReadingGoalProgress/> : <LeftRightSides/>   }
        </div>
        <div className="readingGoalInfo">
            <p className="readingGoalReadedCount">5 kitap</p>
            <p className="readingGoalReadedCount">120 sayfa</p>
            <p className="readingGoalStatus"> 5 kitap geridesin</p>
        </div>
      </div>
      
    </div>
  );
};

export default ReadingGoal;
