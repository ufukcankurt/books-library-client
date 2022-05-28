import "./share.css";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

const Share = ({setIsShare, isShare }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "users/";
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const shareRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${FETCH}posts`, {
      userId: currentUser._id,
      type: "post",
      desc: shareRef.current.value,
    });
    console.log("res", res);
    setIsShare(!isShare)
    shareRef.current.value = "";
  };

  return (
    <div className="shareContainer">
      <div className="shareTextContent">
        <div className="shareUserImg">
          <img src={`${PF}${currentUser.profilePicture}`} alt="" />
        </div>
        <textarea
          ref={shareRef}
          maxLength="500"
          name=""
          id=""
          placeholder="Düşüncelerini arkadaşlarınla paylaş"
        ></textarea>
      </div>
      <div onClick={handleSubmit} className="shareButton">
        Paylaş
      </div>
    </div>
  );
};

export default Share;
