import "./changeProfilePhoto.css";
import { AddAPhoto } from "@material-ui/icons";

const ChangeProfilePhoto = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER+"users/";
  return (
    <div className="changeProfilePhotoContainer">
      <div className="changeProfilePhotoCoverBtn">
        <AddAPhoto />
      </div>
      <div className="changeProfilePhotoCover">
        <img
          src={
            user.coverPicture ? PF + user.coverPicture : PF + "noCover.jpg"
          }
          alt=""
        />
      </div>
      <div className="changeProfilePhotoMain">
        <img
          src={
            user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"
          }
          alt=""
        />
        <div className="changeProfilePhotoMainBtn">
          <AddAPhoto />
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePhoto;
