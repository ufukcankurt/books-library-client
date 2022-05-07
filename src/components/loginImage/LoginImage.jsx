import { useState, useEffect } from "react";
import "./loginImage.css";


const LoginImage = () => {
  const [image, setImage] = useState("/assets/login_5.jpg");

  return (
    <div className="loginImageContainer">
      <img
        src={image}
        alt=""
      />
    </div>
  );
};

export default LoginImage;
