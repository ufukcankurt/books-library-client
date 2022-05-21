import Post from "../post/Post"
import "./feed.css"


const Feed = ({user}) => {
    return (
        <div className="FeedContainer">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed