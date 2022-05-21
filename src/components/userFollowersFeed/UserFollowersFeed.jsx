import "./userFollowersFeed.css";
import UserFollowerOne from "../UserFollowerOne/UserFollowerOne";

const UserFollowersFeed = ({ followings, user }) => {
  console.log("FEED",user);

  const FollowingsComp = () => {
    return(
      <>
      {user.followings?.map((id,i) => {
        return <UserFollowerOne key={i} id={id}/>;
      })}
      </>
    )
  }

  const FollowersComp = () => {
    return(
      <>
      {user.followers?.map((id,i) => {
        return <UserFollowerOne key={i} id={id}/>;
      })}
      </>
    )
  }

  return (
    <div className="userFollowersFeedContainer">
      <h2 className="userFollowersFeedTitle">
        {followings ? "Takip Edilenler" : "Takip Edenler" }
      </h2>
      
      {followings ? <FollowingsComp/> : <FollowersComp/>}
      
    </div>
  );
};

export default UserFollowersFeed;
