import "./changeProfilePhoto.css";
import { AddAPhoto } from "@material-ui/icons";

const ChangeProfilePhoto = () => {
  return (
    <div className="changeProfilePhotoContainer">
        <div className="changeProfilePhotoCoverBtn">
          <AddAPhoto />
        </div>
      <div className="changeProfilePhotoCover">
        <img src="/assets/cover.jpg" alt="" />
      </div>
      <div className="changeProfilePhotoMain">
        <img src="/assets/profile.jpg" alt="" />
        <div className="changeProfilePhotoMainBtn">
          <AddAPhoto />
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePhoto;
