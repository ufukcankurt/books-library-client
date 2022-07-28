import "./admin.css"
import React, { useContext } from "react";
import NotAllowed from "../../components/404/NotAllowed";
import { AuthContext } from "../../context/authContext/AuthContext";
import Nav from "../../components/nav/Nav";
import AdminRightBar from "../../components/AdminRightBar/AdminRightBar";

const Admin = () => {
  const { user: currentUser } = useContext(AuthContext);

  const Page = () => {
    return (
      <>
        <Nav />
        <div className="adminContainer">
            <div className="adminFeed">
                <h1 className="adminTitle">ADMİN PANELİNE HOŞGELDİNİZ...</h1>
                <img src="./assets/admin_02.png" alt="" />
            </div>

            <AdminRightBar/>
        </div>
      </>
    );
  };

  return <>{currentUser.isAdmin === true ? <Page /> : <NotAllowed />}</>;
};

export default Admin;
