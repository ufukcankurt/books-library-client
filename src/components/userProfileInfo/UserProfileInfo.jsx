import "./userProfileInfo.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  School,
  Work,
  LocationCity,
  Cake,
  InsertLink,
  TrackChanges,
} from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const UserProfileInfo = ({ user }) => {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "users/";
  const [readLastYearCount, setReadLastYearCount] = useState(0);

  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    user.bookShelf?.map((book) =>
      book.bookStatus === "finished" && book.bookEnd?.includes("2022")
        ? setReadLastYearCount((prev) => prev + 1)
        : ""
    );
  }, [user]);

  // FOLLOWİNG - FOLLOWERS
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user._id));
  }, [currentUser, user._id]);

  // FOLLOWİNG - FOLLOWERS
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  const SettingsProfileComp = () => {
    return (
      <Link
        to={`/user/profile-settings`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="settingsButton">PROFİLİ DÜZENLE</div>
      </Link>
    );
  };

  const FollowButtonComp = () => {
    return (
      <div
        className="settingsButton"
        onClick={handleClick}
        style={
          followed
            ? { color: "white", backgroundColor: "rgb(210, 62, 48)" }
            : { color: "inherit", backgroundColor: "inherit" }
        }
      >
        {followed ? "TAKİP EDİLİYOR" : "TAKİP ET"}
      </div>
    );
  };

  const EducationComp = () => {
    return (
      <div className="education">
        <School /> {user.education}
      </div>
    );
  };

  const JobComp = () => {
    return (
      <div className="job">
        <Work /> {user.job}
      </div>
    );
  };

  const CityComp = () => {
    return (
      <div className="city">
        <LocationCity />
        {user.city}
      </div>
    );
  };

  const WebsiteComp = () => {
    return (
      <div className="website">
        <InsertLink />
        <a href={`${user.website}`}>{user.website}</a>
        {/* <Link to={`${user.website}`}>{user.website}</Link> */}
      </div>
    );
  };

  const GoalComp = () => {
    return (
      <>
        <Link to={`/${user.username}/reading-goal`}>
          <div className="goal">
            <TrackChanges />
            2022 okuma hedefi: {readLastYearCount}/{user.readingTarget}
          </div>
        </Link>
      </>
    );
  };

  const BirthDayComp = () => {
    return (
      <div className="birthday">
        <Cake />
        {`${user.dob_day}  ${user.dob_month}  ${user.dob_year}`}
      </div>
    );
  };

  return (
    <div className="UserProfileInfoContainer">
      <div className="coverPhotoContainer">
        <img
          className="coverPhoto"
          src={user.coverPicture ? PF + user.coverPicture : PF + "noCover.jpg"}
          alt=""
        />
        <img
          src={
            user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"
          }
          alt=""
          className="profilePhoto"
        />
      </div>
      <div className="settingsContainer">
        {user.username === currentUser.username ? (
          <SettingsProfileComp />
        ) : (
          <FollowButtonComp />
        )}
      </div>
      <div className="descriptionContainer">
        <div className="usernameInfo">
          <p className="nameText">{user.fullname}</p>
          <p className="usernameText">@{user.username}</p>
        </div>
        <div className="bioInfo">
          <p className="bioText">{user.desc ? user.desc : ""}</p>
        </div>
        <div className="userProperty">
          {user.education ? <EducationComp /> : ""}
          {user.job ? <JobComp /> : ""}
          {user.city ? <CityComp /> : ""}

          {user.dob_day && user.dob_month && user.dob_year ? (
            <BirthDayComp />
          ) : (
            ""
          )}

          {user.website ? <WebsiteComp /> : ""}
          {user.readingTarget ? <GoalComp /> : ""}
        </div>
        <div className="followersInfo">
          <Link
            to={`/${user.username}/shelf`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="bookNumbers">
              158 <span className="followersInfoSpan">Kitap</span>
            </div>
          </Link>
          <Link
            to={`/${user.username}/followings`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="followingNumbers">
              {user.followings?.length}
              <span className="followersInfoSpan"> Takip edilen</span>
            </div>
          </Link>
          <Link
            to={`/${user.username}/followers`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="followerNumbers">
              {user.followers?.length}
              <span className="followersInfoSpan"> Takipçi</span>
            </div>
          </Link>
          <Link
            to={`/${user.username}/shelf`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="followerNumbers">
              <span className="followersInfoSpan">Kitaplık</span>
            </div>
          </Link>
          <Link
            to={`/${user.username}/notes`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="followerNumbers">
              <span className="followersInfoSpan">Notlar</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
