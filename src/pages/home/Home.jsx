import "./home.css";
import Nav from "../../components/nav/Nav";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="homeContainer">
        <LeftBar />
        <div className="homeTimeline">
          <Feed />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
