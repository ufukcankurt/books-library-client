import "./userFollowerOne.css"
import { useEffect, useRef, useState } from "react";

const UserFollowerOne = () => {

    const [isFollow, setIsFollow] = useState(true);

    const follow = useRef();

    useEffect(()=>{
        console.log(follow);
        console.log("Children:",follow.current.innerText);
    })

    const onChangeButton = () => {
        if(isFollow === false){
            follow.current.innerText = "Takip Ediliyor"
            follow.current.style.backgroundColor = "red"
            follow.current.style.color = "white"
            setIsFollow(true)
        }else{
            follow.current.innerText = "Takip Et"
            follow.current.style.color = "inherit"
            follow.current.style.backgroundColor = "inherit"
            setIsFollow(false)
        }
    }

  return (
    <div className="userFollowerOneContainer">
      <div className="userFollowerOneLeftside">
        <div className="userFollowerOneImg">
          <img src="/assets/profile.jpg" alt="" />
        </div>
        <div className="userFollowerOneInfo">
          <p className="userFollowerOneFullname">Ufuk Can Kurt</p>
          <p className="userFollowerOneUsername">@ufukcankurt</p>
          <p className="userFollowerOneUsername">{`${isFollow}`}</p>
        </div>
      </div>
      <div ref={follow} style={isFollow ? {color:"white", backgroundColor:"rgb(210, 62, 48)"} : {color:"inherit", backgroundColor:"inherit"} } className="userFollowerButton" onClick={onChangeButton}>
         {isFollow ? "Takip Ediliyor" : "Takip Et" } 
      </div>
    </div>
  );
};

export default UserFollowerOne;
