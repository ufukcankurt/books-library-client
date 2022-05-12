import "./userShelf.css"
import Nav from "../../components/nav/Nav"
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo"
import RightBar from "../../components/rightBar/RightBar"
import UserShelfFeed from "../../components/userShelfFeed/UserShelfFeed"

const UserShelf = () => {
  return (
    <>
    <Nav />
    <div className="userShelfContainer">
      <div className="userShelfTimeline">
        <UserProfileInfo />
        <UserShelfFeed/>
      </div>
      <RightBar profile />
    </div>
  </>
  )
}

export default UserShelf