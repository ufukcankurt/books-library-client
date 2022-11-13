import "./userReadingGoal.css";
import RightBar from "../../components/rightBar/RightBar";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import ReadingGoal from "../../components/readingGoal/ReadingGoal";
import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import moment from "moment";
import OtherUserReadingTarget from "../../components/otherUserReadingTarget/OtherUserReadingTarget";

const UserReadingGoal = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH 
  const [isOpen, setIsOpen] = useState(false);
  const [newGoal, setNewGoal] = useState("");
  const goalModal = useRef();
  const inputRef = useRef()
  
  const { username } = useParams();
  const [user, setUser] = useState({});
  const { user: currentUser, dispatch } = useContext(AuthContext);
  
  //TİME CALC
  const given = moment("2023-01-01", "YYYY-MM-DD");
  const current = moment().startOf("day");
  //Difference in number of days
  const leftDays = moment.duration(given.diff(current)).asDays();
  const [readingTarget, setReadingTarget ] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${FETCH}users?username=${username}`
      );
      setUser(res.data);
      setReadingTarget(res.data?.readingTarget)
    };
    fetchUser();
  }, [username, FETCH]);

  const handleChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleModal = () => {
    if (isOpen === false) {
      goalModal.current.style.display = "flex";
      setIsOpen(true);
    } else {
      goalModal.current.style.display = "none";
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch request
    try {
      await axios.put(
        `${FETCH}users/${currentUser._id}`,
        { readingTarget: newGoal },
        {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        }
      );
      dispatch({ type: "READINGTARGET", payload: newGoal });
      setReadingTarget(newGoal)
    } catch (error) {
      console.log(error);
    }
  };

  const UserReadingGoalUpdateButtonComp = () => {
    return (
      <div className="userReadingGoalUpdateButton" onClick={handleModal}>
        Hedefini Güncelle
      </div>
    );
  };

  const handleWheel = () => {
    inputRef.current.blur();
  }
  return (
    <>
      <div className="userReadingGoalContainer">
        <div className="userReadingGoalTimeline">
          <UserProfileInfo user={user} />
          <h2 className="userReadingGoalTitle">Okuma Hedefleri</h2>
          <div className="userReadingGoalFeed">
            <div className="userReadingGoalTimeLeft">
              <span>Kalan Zaman :</span> {leftDays} gün kaldı.
            </div>
            {user._id === currentUser._id ? (
              <UserReadingGoalUpdateButtonComp />
            ) : (
              ""
            )}
            <div
              ref={goalModal}
              className="userReadingGoalNewGoalModal"
              style={isOpen ? { display: "flex" } : { display: "none" }}
            >
              <label htmlFor="new_goal">Başlık</label>
              <input
                ref={inputRef}
                type="number"
                id="new_goal"
                name="new_goal"
                placeholder="Yeni Hedefinizi Girin."
                required={true}
                value={newGoal}
                onChange={handleChange}
                onWheel={handleWheel}
              />
              <div
                className="userReadingGoalNewGoalButton"
                onClick={handleSubmit}
              >
                Güncelle
              </div>
            </div>

            {user.username === currentUser.username ? <ReadingGoal readingTarget={readingTarget} users user={user} /> : <OtherUserReadingTarget users/>}
          </div>
        </div>
        <RightBar readingTarget={readingTarget} user={user} profile />
      </div>
    </>
  );
};

export default UserReadingGoal;
