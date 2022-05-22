import "./registerForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MyDatePickerOwn from "../myDatePickerOwn/MyDatePickerOwn";

// "http://localhost:8000/api/auth/register"

const RegisterForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:8000/api/auth/register",  formData )

      await axios
        .post("http://localhost:8000/api/auth/register", { formData })
        .then((response) => setStatus(response.status));
    } catch (error) {
      console.log(error);
    }
  };
  console.log("state'deki status:", typeof(status) );

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
    full_name: "",
    username: "",
    email: "",
    password: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender_identity: "",
  });

  console.log("Form:", formData);

  return (
    <div className="registerFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="registerFormTitle">
          <h3>Kayıt Ol</h3>
          {status === 200 ? (
            <h4 style={{ color: "red" }}>Başarılı bir şekilde kayıt olundu.</h4>
          ) : (
            <></>
          )}
          <img src="/assets/sign-up.png" alt="" />
        </div>
        <label htmlFor="full_name">İsim ve Soyisim</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="İsim ve Soyisminizi Girin."
          required={true}
          value={formData.full_name}
          onChange={handleChange}
        />
        <label htmlFor="username">Kullanıcı İsmi</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Kullanıcı İsminizi Girin."
          required={true}
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mailinizi Girin."
          required={true}
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Şifrenizi Girin."
          required={true}
          value={formData.password}
          onChange={handleChange}
        />

        {/* <label>Doğum Günü</label>
        <div className="multiple-input-container">
          <MyDatePickerOwn formData={formData} setFormData={setFormData} />
        </div> */}

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
        <input className="registerFormButton" type="submit" />
        <div className="haveAccount">
          <p>Hesabın var mı?</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p className="registerFormLinkP">Giriş yap</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
