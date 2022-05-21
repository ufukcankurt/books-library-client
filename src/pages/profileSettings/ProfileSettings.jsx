import "./profileSettings.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import ChangeProfilePhoto from "../../components/changeProfilePhoto/ChangeProfilePhoto";
import ProfileSettingsForm from "../../components/profileSettingsForm/ProfileSettingsForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const ProfileSettings = () => {
  let { userId } = useParams();
  let navigate = useNavigate();
  const {user} = useContext(AuthContext);

  console.log("PROF SETTİNG user:", user);
  useEffect(() => {
    if (userId !== user._id) {
      // navigate("/");
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="profileSettingsContainer">
        <div className="profileSettingsTimeline">
          <ChangeProfilePhoto user={user}  />
          <ProfileSettingsForm user={user} />
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default ProfileSettings;
