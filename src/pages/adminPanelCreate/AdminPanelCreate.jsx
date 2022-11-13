import "./adminPanelCreate.css"
import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import AdminRightBar from "../../components/AdminRightBar/AdminRightBar";
import AdminCreateBook from "../../components/adminCreateBook/AdminCreateBook";
import { AuthContext } from "../../context/authContext/AuthContext";
import AdminCreateAuthor from "../../components/adminCreateAuthor/AdminCreateAuthor";
import AdminCreateNews from "../../components/adminCreateNews/AdminCreateNews";
import AdminCreateTodayInHistory from "../../components/adminCreateTodayInHistory/AdminCreateTodayInHistory";

const AdminPanelCreate = () => {
  const { user: currentUser } = useContext(AuthContext);
  const { categoryName } = useParams();

  return (
    <>
      <div className="adminPanelCreateContainer">
        <div className="adminPanelCreateFeed">
            {categoryName === "book" ? <AdminCreateBook currentUser={currentUser} /> : ""}
            {categoryName === "author" ? <AdminCreateAuthor currentUser={currentUser} /> : ""}
            {categoryName === "news" ? <AdminCreateNews currentUser={currentUser} /> : ""}
            {categoryName === "todayinhistory" ? <AdminCreateTodayInHistory currentUser={currentUser} /> : ""}
        </div>
        <AdminRightBar/>
      </div>
    </>
  );
};

export default AdminPanelCreate;
