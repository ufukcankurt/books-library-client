import "./createNote.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import CreateNoteFeed from "../../components/createNoteFeed/CreateNoteFeed";
import CreateNoteSearch from "../../components/createNoteSearch/CreateNoteSearch";

const CreateNote = () => {
  return (
    <>
      <Nav />
      <div className="createNoteContainer">
        <div className="createNoteContent">
          <CreateNoteSearch />
        </div>

        <RightBar profile />
      </div>
    </>
  );
};

export default CreateNote;
