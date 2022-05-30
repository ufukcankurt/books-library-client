import "./userFollowerOne.css";
import { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const UserFollowerOne = ({ id }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH 
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const follow = useRef();
  const [isFollow, setIsFollow] = useState(true);
  const [user, setUser] = useState({});

  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  // FOLLOWİNG - FOLLOWERS
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user._id));
  }, [currentUser, user._id]);

  // FOLLOWİNG - FOLLOWERS
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`${FETCH}users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`${FETCH}users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `${FETCH}users?userId=${id}`
      );
      setUser(res.data);
    };
    getUser();
  }, [id]);

  const onChangeButton = () => {
    if (isFollow === false) {
      follow.current.innerText = "Takip Ediliyor";
      follow.current.style.backgroundColor = "red";
      follow.current.style.color = "white";
      setIsFollow(true);
    } else {
      follow.current.innerText = "Takip Et";
      follow.current.style.color = "inherit";
      follow.current.style.backgroundColor = "inherit";
      setIsFollow(false);
    }
  };

  const FollowersFollowingsButtonComp = () => {
    return (
      <div
        ref={follow}
        style={
          followed
            ? { color: "white", backgroundColor: "rgb(210, 62, 48)" }
            : { color: "inherit", backgroundColor: "inherit" }
        }
        className="userFollowerButton"
        onClick={handleClick}
      >
        {followed ? "TAKİP EDİLİYOR" : "TAKİP ET"}
      </div>
    );
  };

  return (
    <div className="userFollowerOneContainer">
      <div className="userFollowerOneLeftside">
        <div className="userFollowerOneImg">
          <img src={user.profilePicture} alt="" />
        </div>
        <div className="userFollowerOneInfo">
          <p className="userFollowerOneFullname">{user.fullname}</p>
          <p className="userFollowerOneUsername">@{user.username}</p>
        </div>
      </div>
      {user.username !== currentUser.username ? (
        <FollowersFollowingsButtonComp />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserFollowerOne;
