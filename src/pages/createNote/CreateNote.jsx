import "./createNote.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import CreateNoteFeed from "../../components/createNoteFeed/CreateNoteFeed";

const CreateNote = () => {
  return (
    <>
      <Nav />
      <div className="createNoteContainer">
        
        <CreateNoteFeed />

        <RightBar profile />
      </div>
    </>
  );
};

export default CreateNote;
