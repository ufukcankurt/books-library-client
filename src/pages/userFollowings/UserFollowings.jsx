import "./userFollowings.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";

const UserFollowings = () => {
  return (
    <>
      <Nav />
      <div className="userFollowingsContainer">
        <div className="userFollowingsTimeline">
          <UserProfileInfo />
          <UserFollowersFeed followings/>
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowings;
