import CreateNoteMain from "../createNoteMain/CreateNoteMain";

import "./createNoteFeed.css";

const CreateNoteFeed = ({book, currentBook, isExist, currentNote}) => {
  return (
    <div className="createNoteFeedContainer">
      <h1 className="createNoteFeedTitle">Not Ekle & Özet Yaz</h1>
      
      <CreateNoteMain isExist={isExist} currentNote={currentNote} book={book} currentBook={currentBook} />
    </div>
  );
};

export default CreateNoteFeed;
