import "./userBooks.css";
import Nav from "../../components/nav/Nav";
import UserProfileInfo from "../../components/userProfileInfo/UserProfileInfo";
import RightBar from "../../components/rightBar/RightBar";
import BooksFeed from "../../components/booksFeed/BooksFeed";

const UserBooks = () => {
  return (
    <>
      <Nav />
      <div className="userBooksContainer">
        <div className="userBooksTimeline">
          <UserProfileInfo />
          <BooksFeed />
        </div>
        <RightBar profile />
      </div>
    </>
  );
};

export default UserBooks;
