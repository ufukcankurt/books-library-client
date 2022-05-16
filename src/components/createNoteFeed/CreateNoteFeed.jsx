import CreateNoteMain from "../createNoteMain/CreateNoteMain";
import CreateNoteSearch from "../createNoteSearch/CreateNoteSearch";
import "./createNoteFeed.css";

const CreateNoteFeed = () => {
  return (
    <div className="createNoteFeedContainer">
      <h1 className="createNoteFeedTitle">Not Ekle & Özet Yaz</h1>
      <CreateNoteSearch/>
      <CreateNoteMain/>
    </div>
  );
};

export default CreateNoteFeed;
