import "./share.css";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import LoadingComp from "../loadingComp/LoadingComp";
import MyAlertComp from "../myAlertComp/MyAlertComp";

const Share = ({ setIsShare, isShare }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "users/";
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const { user: currentUser } = useContext(AuthContext);
  const shareRef = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (shareRef.current.value?.length === 0) setIsVisible(true);
    if (shareRef.current.value?.length === 0) return;
    setIsFetching(true);
    await axios.post(`${FETCH}posts`, {
      userId: currentUser._id,
      type: "post",
      desc: shareRef.current.value,
    });
    setIsShare(!isShare);
    shareRef.current.value = "";
    setIsFetching(false);
  };

  return (
    <div className="shareContainer">
      <div className="shareTextContent">
        {isVisible === true ? (
          <MyAlertComp
            danger={"danger"}
            message={"Bu şekilde paylaşım yapılamaz!"}
            setIsVisible={setIsVisible}
          />
        ) : (
          ""
        )}
        <div className="shareUserImg">
          <img src={currentUser.profilePicture} alt="" />
        </div>
        <textarea
          ref={shareRef}
          maxLength="500"
          name=""
          id=""
          placeholder="Düşüncelerini arkadaşlarınla paylaş"
        ></textarea>
      </div>
      <button
        disabled={isFetching}
        onClick={handleSubmit}
        className="shareButton"
      >
        {isFetching ? <LoadingComp button /> : "Paylaş"}
      </button>
    </div>
  );
};

export default Share;
