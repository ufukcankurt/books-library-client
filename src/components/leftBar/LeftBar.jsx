import CurrentlyReadings from "../currentlyReadings/CurrentlyReadings"
import ReadingGoal from "../readingGoal/ReadingGoal"
import "./leftBar.css"

const LeftBar = () => {
    return (
        <div className="leftBarContainer">
            <CurrentlyReadings/>
            <ReadingGoal/>
        </div>
    )
}

export default LeftBar