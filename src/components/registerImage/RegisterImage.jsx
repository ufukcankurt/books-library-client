import { useState, useEffect } from "react";
import "./registerImage.css";


const RegisterImage = ({ registerImage }) => {
  const [image, setImage] = useState("/assets/login_10.jpg");


  return (
    <div className="registerImageContainer">
      <img
        src={image}
        alt=""
      />
    </div>
  );
};

export default RegisterImage;
