import "./createNote.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import SearchComp from "../../components/searchComp/SearchComp";

const CreateNote = () => {
  return (
    <>
      <Nav />
      <div className="createNoteContainer">
        <div className="createNoteContent">
          <SearchComp message={"Not yazmak istediğin kitabı ara"} book />
        </div>

        <RightBar profile />
      </div>
    </>
  );
};

export default CreateNote;
