import "./profileSettings.css";
import Nav from "../../components/nav/Nav";
import RightBar from "../../components/rightBar/RightBar";
import ChangeProfilePhoto from "../../components/changeProfilePhoto/ChangeProfilePhoto";
import ProfileSettingsForm from "../../components/profileSettingsForm/ProfileSettingsForm";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const ProfileSettings = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  return (
    <div>
      <Nav />
      <div className="profileSettingsContainer">
        <div className="profileSettingsTimeline">
          <ChangeProfilePhoto
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            image={image}
            setImage={setImage}
            user={user}
          />
          <ProfileSettingsForm
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            image={image}
            setImage={setImage}
            user={user}
          />
        </div>
        <RightBar profile />
      </div>
    </div>
  );
};

export default ProfileSettings;
