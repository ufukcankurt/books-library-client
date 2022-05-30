import "./userFollowersFeed.css";
import UserFollowerOne from "../UserFollowerOne/UserFollowerOne";
import { useEffect, useState } from "react";

const UserFollowersFeed = ({ followings, user }) => {
  const [isRender, setIsRender] = useState(false);


  useEffect(()=> {
    setTimeout(() => {
      setIsRender(true);
    }, 1000);
  },[user])

  const FollowingsComp = () => {
    return(
      <>
        {user.followings?.length === 0 && isRender === true ? (
            <p className="feedWarning">Henüz bir kişiyi takip etmiyorsunuz!</p>
          ) : (
            ""
          )}
      {user.followings?.map((id,i) => {
        return <UserFollowerOne key={i} id={id}/>;
      })}
      </>
    )
  }

  const FollowersComp = () => {
    return(
      <>
      {user.followers?.length === 0 && isRender === true ? (
          <p className="feedWarning">Henüz bir takipçiniz yok!</p>
        ) : (
          ""
        )}
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
