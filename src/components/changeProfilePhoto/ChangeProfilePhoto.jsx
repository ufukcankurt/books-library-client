import "./changeProfilePhoto.css";
import { AddAPhoto } from "@material-ui/icons";

const ChangeProfilePhoto = ({
  user,
  image,
  setImage,
  coverImage,
  setCoverImage,
}) => {
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleCoverImageChange = (e) => {
    if (e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  return (
    <div className="changeProfilePhotoContainer">
      <div className="changeProfilePhotoCoverBtn">
        <label id="" htmlFor="upload-cover">
          <AddAPhoto />
        </label>
        <input
          onChange={handleCoverImageChange}
          id="upload-cover"
          type="file"
        />
      </div>
      <div className="changeProfilePhotoCover">
        <img src={user.coverPicture} alt="" />
      </div>
      <div className="changeProfilePhotoMain">
        <img src={user.profilePicture} alt="" />
        <div className="changeProfilePhotoMainBtn">
          <label id="" htmlFor="upload-pp">
            <AddAPhoto />
          </label>
          <input onChange={handleImageChange} id="upload-pp" type="file" />
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePhoto;
