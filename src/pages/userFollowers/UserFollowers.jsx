import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import UserFollowersFeed from "../../components/userFollowersFeed/UserFollowersFeed";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import "./userFollowers.css";

const UserFollowers = () => {
  return (
    <>
      <Nav />
      <div className="userFollowersContainer">
        <div className="userFollowersTimeline">
          <UserProfileInfo />
            
          <UserFollowersFeed />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserFollowers;
