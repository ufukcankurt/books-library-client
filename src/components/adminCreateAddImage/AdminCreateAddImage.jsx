import "./adminCreateAddImage.css"
import React from 'react'
import { AddAPhoto, Cancel } from "@material-ui/icons";

const AdminCreateAddImage = ({image, setImage}) => {

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
  return (
    <div className="adminCreateBookCreateImage">
        <h2 className="adminCreateBookCreateImageTitle">Fotoğraf Ekle</h2>
        <div className="adminCreateBookPhotoBtn">
          <label id="" htmlFor="upload-cover">
            <AddAPhoto />
          </label>
          <input required onChange={handleImageChange} id="upload-cover" type="file" />
        </div>
        {image && (
          <div className="shareImgContainer"> 
            <img className="shareImg" src={URL.createObjectURL(image)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setImage(null)} />
          </div>
        )}
      </div>
  )
}

export default AdminCreateAddImage