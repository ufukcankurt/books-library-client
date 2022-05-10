import "./currentBook.css"

const CurrentBook = () => {
    return (
        <div className="CurrentBookContainer">
            <div className="currentBookImg">
                <img src="./assets/books/bulbulu_oldurmek.jpg" alt="" />
            </div>
            <div className="currentBookInfo">
                <p className="currentBookName">Bülbülü Öldürmek</p>
                <p className="currentBookAuthor">Harper Lee</p>
            </div>
        </div>
    )
}

export default CurrentBook