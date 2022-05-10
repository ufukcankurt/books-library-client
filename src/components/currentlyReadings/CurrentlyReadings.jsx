import CurrentBook from "../currentBook/CurrentBook"
import "./currentlyReadings.css"

const CurrentlyReadings = () => {
    return (
        <div className="currentlyReadingsContainer">
            <h2 className="currentlyReadingsTitle">Şu anda okuyor</h2>
            <CurrentBook/>
            <CurrentBook/>
        </div>
    )
}

export default CurrentlyReadings