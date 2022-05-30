import "./profileSettingsForm.css";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase";
import { useEffect, useState } from "react";
import axios from "axios";
import MyDatePickerOwn from "../myDatePickerOwn/MyDatePickerOwn";
import MyAlertComp from "../myAlertComp/MyAlertComp";

const ProfileSettingsForm = ({
  user,
  image,
  setImage,
  coverImage,
  setCoverImage,
}) => {
  const [url, setUrl] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [isCoverImageUpload, setIsCoverImageUpload] = useState(false);

  useEffect(() => {});

  const [formData, setFormData] = useState({
    full_name: user.fullname,
    education: user.education,
    job: user.job,
    city: user.city,
    website: user.website,
    bio: user.desc,
    dob_day: user.dob_day,
    dob_month: user.dob_month,
    dob_year: user.dob_year,
    gender_identity: user.gender,
    profilePicture: "",
    coverPicture: "",
  });

  // UPLOAD THE PROFILE PHOTO TO FIREBASE
  useEffect(() => {
    const sendData = async () => {
      try {
        if (image) {
          const imageRef = ref(storage, `/images/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image)
            .then(() => {
              getDownloadURL(imageRef)
                .then((url) => {
                  setUrl(url);
                  setIsImageUpload(true);
                })
                .catch((error) => {
                  console.log("error:", error);
                });
            })
            .catch((error) => {
              console.log("error:", error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();
  }, [image]);

  // UPLOAD THE COVER PHOTO TO FIREBASE
  useEffect(() => {
    const sendData = async () => {
      try {
        if (coverImage) {
          const imageRef = ref(storage, `/images/${Date.now()}_${coverImage.name}`);
          await uploadBytes(imageRef, coverImage)
            .then(() => {
              getDownloadURL(imageRef)
                .then((url) => {
                  setCoverUrl(url);
                  setIsCoverImageUpload(true);
                })
                .catch((error) => {
                  console.log("error:", error);
                });
            })
            .catch((error) => {
              console.log("error:", error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();
  }, [coverImage]);

  // UPDATE DATABASE ACCORDING TO USER PROFILE PHOTO
  useEffect(() => {
    const updateUser = async () => {
      if (isImageUpload && url) {
        try {
          const res = await axios.put(
            `http://localhost:8000/api/users/${user._id}`,
            { profilePicture: url },
            {
              headers: {
                token: `Bearer ${user.accessToken}`,
              },
            }
          );
          console.log("res:", res);
          setIsSuccess(true);
          setIsVisible(true);
          setIsImageUpload(false);
          setUrl(null);
          user.profilePicture = url;
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateUser();
  }, [isImageUpload]);

  // UPDATE DATABASE ACCORDING TO USER COVER PHOTO
  useEffect(() => {
    const updateUser = async () => {
      if (isCoverImageUpload && coverUrl) {
        try {
          const res = await axios.put(
            `http://localhost:8000/api/users/${user._id}`,
            { coverPicture: coverUrl },
            {
              headers: {
                token: `Bearer ${user.accessToken}`,
              },
            }
          );
          console.log("res:", res);
          setIsSuccess(true);
          setIsVisible(true);
          setIsCoverImageUpload(false);
          setUrl(null);
          user.coverPicture = coverUrl;
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateUser();
  }, [isCoverImageUpload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8000/api/users/${user._id}`,
        { formData },
        {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log("RESPONSE", res);
      user.fullname = formData.full_name;
      user.education = formData.education;
      user.job = formData.job;
      user.city = formData.city;
      user.website = formData.website;
      user.desc = formData.bio;
      user.dob_day = formData.dob_day;
      user.dob_month = formData.dob_month;
      user.dob_year = formData.dob_year;
      user.gender = formData.gender_identity;
      localStorage.setItem("user", JSON.stringify(user));
      res.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
      res.status === 200 ? setIsVisible(true) : setIsSuccess(false);
      setImage(null);
      setCoverImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="profileSettingsFormContainer">
      <h2 className="profileSettingsFormTitle">Profili Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">İsim ve Soyisim</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="İsim ve Soyisim"
          required={true}
          value={formData.full_name}
          onChange={handleChange}
        />
        <label htmlFor="education">Eğitim</label>
        <input
          type="text"
          id="education"
          name="education"
          placeholder="Eğitim"
          value={formData.education}
          onChange={handleChange}
        />
        <label htmlFor="job">Meslek</label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="Meslek"
          value={formData.job}
          onChange={handleChange}
        />
        <label htmlFor="city">Şehir</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Şehir"
          value={formData.city}
          onChange={handleChange}
        />
        <label htmlFor="website">Web Sitesi</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="Websitesi"
          value={formData.website}
          onChange={handleChange}
        />
        <label htmlFor="bio">Biyografi</label>
        <textarea
          rows="5"
          cols="20"
          name="bio"
          id="bio"
          placeholder="Biyografinizde kendinizi anlatıp, sevdiğiniz şeylerden bahsedebilirsiniz. Profilinizde gösterilecektir."
          value={formData.bio}
          onChange={handleChange}
        ></textarea>

        <label>Doğum Günü</label>
        <div className="multiple-input-container">
          <MyDatePickerOwn formData={formData} setFormData={setFormData} />
        </div>

        <label>Cinsiyet</label>
        <div className="multiple-input-container">
          <input
            type="radio"
            id="man-gender-identity"
            name="gender_identity"
            required={true}
            value="man"
            onChange={handleChange}
            checked={formData.gender_identity === "man"}
          />
          <label htmlFor="man-gender-identity">Erkek</label>
          <input
            type="radio"
            id="woman-gender-identity"
            name="gender_identity"
            required={true}
            value="woman"
            onChange={handleChange}
            checked={formData.gender_identity === "woman"}
          />
          <label htmlFor="woman-gender-identity">Kadın</label>
        </div>
        {isVisible === true ? (
          <MyAlertComp
            message={"Bilgileriniz Başarıyla Güncellendi!"}
            setIsVisible={setIsVisible}
          />
        ) : (
          ""
        )}
        <input
          className="profileSettingsFormButton"
          type="submit"
          value="Bilgileri Güncelle"
        />
      </form>
    </div>
  );
};

export default ProfileSettingsForm;
