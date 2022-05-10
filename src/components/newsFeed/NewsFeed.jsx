import NewsPost from "../newsPost/NewsPost"
import "./newsFeed.css"

const NewsFeed = () => {
    return (
        <div className="newsFeedContainer">
            <h1 className="newsFeedTitle">Haberler</h1>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
        </div>
    )
}

export default NewsFeed