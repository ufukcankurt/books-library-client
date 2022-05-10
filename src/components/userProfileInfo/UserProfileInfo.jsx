import "./userProfileInfo.css"
import { Link, useNavigate } from "react-router-dom";
import {
    School,
    Work,
    LocationCity,
    Cake,
    InsertLink,
    TrackChanges,
  } from "@material-ui/icons";

const UserProfileInfo = () => {

    let navigate = useNavigate();

    return (
        <div className="UserProfileInfoContainer">
            <div className="coverPhotoContainer">
            <img className="coverPhoto" src="/assets/cover.jpg" alt="" />
            <img src="/assets/profile.jpg" alt="" className="profilePhoto" />
          </div>
          <div className="settingsContainer">
            <div className="settingsButton" onClick={()=>{navigate("/login")}}>PROFİLİ DÜZENLE</div>
          </div>
          <div className="descriptionContainer">
            <div className="usernameInfo">
              <p className="nameText">Ufuk Can Kurt</p>
              <p className="usernameText">@ufukcankurt</p>
            </div>
            <div className="bioInfo">
              <p className="bioText">
                • <br />
                `Okumayı bıraktığın gün sonbahardır, ertesi gün cehaletin kışı
                başlar...<br />•
              </p>
            </div>
            <div className="userProperty">
              <div className="education">
                {" "}
                <School /> Pamukkale Üniversitesi
              </div>
              <div className="job">
                <Work /> Software Engineer
              </div>
              <div className="city">
                <LocationCity /> Denizli
              </div>
              <div className="birthday">
                <Cake />
                10.05.2022
              </div>
              <div className="website">
                <InsertLink />
                <Link to="www.instagram.com/ufuk.books">instagram.com/ufuk.books</Link>
              </div>
              <div className="goal">
                <TrackChanges />
                2022 okuma hedefi: 14/75
              </div>
            </div>
            <div className="followersInfo">
                <div className="bookNumbers">158 <span className="followersInfoSpan">Kitap</span></div>
                <div className="followingNumbers">50 <span className="followersInfoSpan">Takip edilen</span></div>
                <div className="followerNumbers">780 <span className="followersInfoSpan">Takipçi</span></div>
            </div>
          </div>
        </div>
    )
}

export default UserProfileInfo