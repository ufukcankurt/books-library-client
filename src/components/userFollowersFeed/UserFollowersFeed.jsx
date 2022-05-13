import "./userFollowersFeed.css"
import UserFollowerOne from "../UserFollowerOne/UserFollowerOne"

const UserFollowersFeed = ({followings}) => {
  return (
      <div className="userFollowersFeedContainer">
          <h2 className="userFollowersFeedTitle">{followings ? "Takip Edenler" : "Takip Edilenler"}</h2>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
          <UserFollowerOne/>
      </div>
  )
}

export default UserFollowersFeed