import Nav from "../../components/nav/Nav"
import NewsFeed from "../../components/newsFeed/NewsFeed"
import NewsRightBar from "../../components/newsRightBar/NewsRightBar"
import "./news.css"

const News = () => {
    return (
        <>
        <Nav/>
        <div className="newsContainer">
            
            <NewsFeed/>
            <NewsRightBar/>
        </div>
        </>
    )
}

export default News