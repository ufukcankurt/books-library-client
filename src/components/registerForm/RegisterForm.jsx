import "./registerForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MyAlertComp from "../../components/myAlertComp/MyAlertComp";

const RegisterForm = () => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${FETCH}auth/register`, { formData })
        .then((response) => setStatus(response.status));
      setMessage("Başarıyla kayıt oldunuz.");
      setIsVisible(true);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsVisible(true);
      setIsError(true);
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
          {isVisible === true ? (
            <MyAlertComp
              danger={isError ? "danger" : ""}
              message={message}
              setIsError={setIsError}
              setIsVisible={setIsVisible}
            />
          ) : (
            ""
          )}
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
