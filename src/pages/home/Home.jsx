import "./home.css";
import Nav from "../../components/nav/Nav";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import LoadingComp from "../../components/loadingComp/LoadingComp";

const Home = () => {
   const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true)
    document.title = `Anasayfa - Uck Books`
    setIsLoading(false)
  }, [])

  return (
    <div>
      <Nav />
      <div className="homeContainer">
        <LeftBar />
        <div className="homeTimeline">
          <div className="homeTimelineTitle">
            <h2>Anasayfa</h2>
          </div>
          {isLoading ? <LoadingComp/> :  <Feed />}
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
