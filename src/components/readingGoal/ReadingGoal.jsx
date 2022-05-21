import "./readingGoal.css";
import { CircleProgress } from "react-gradient-progress";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";


const ReadingGoal = ({users, user,readingTarget}) => {

  const {user:currentUser} = useContext(AuthContext)

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
      <div className="readingGoalTitles">
      <h2 className="readingGoalTitle">2022 Okuma Hedefi </h2>
      <h2 className="readingGoalCountTitle"> {users ? readingTarget : currentUser.readingTarget} / 5</h2>
      </div>
      <div className="readingGoalProgress">
        <div>
        {users ? <UserReadingGoalProgress/> : <LeftRightSides/>   }
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
