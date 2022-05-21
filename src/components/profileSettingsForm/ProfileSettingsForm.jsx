import "./profileSettingsForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyDatePickerOwn from "../myDatePickerOwn/MyDatePickerOwn";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ProfileSettingsForm = ({ user }) => {
  console.log("JSON:", user);
  console.log("id:", user._id);
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8000/api/users/${user._id}`,
        formData,
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
      console.log("PLEASE:", user);
      localStorage.setItem("user", JSON.stringify(user));
      res.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
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
  });

  console.log("Form:", formData);

  const AlertComponent = ({ danger }) => {
    return (
      <>
        <Alert status={danger ? danger : "success"}>
          <AlertIcon />
          <AlertTitle></AlertTitle>
          <AlertDescription>
          {danger ? "Bir hata ile karşılaştık!" : "Bilgileriniz Başarıyla Güncellendi!"}
           
          </AlertDescription>
        </Alert>
      </>
    );
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
        {isSuccess === true ? <AlertComponent /> : ""}
        {isSuccess === false ? <AlertComponent danger={"error"} /> : ""}
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
