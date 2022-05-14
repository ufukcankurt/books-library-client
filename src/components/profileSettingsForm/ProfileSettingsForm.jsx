import "./profileSettingsForm.css"
import { useState } from "react"

const ProfileSettingsForm = () => {


    const handleSubmit = () => {

    }

    const handleChange = (e) => {

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
    
        setFormData((prevState)=> ( {
          ...prevState,
          [name]:value
        }))
      };
    
      const [formData, setFormData] = useState({
        full_name:"",
        education:"",
        job:"",
        city:"",
        website:"",
        bio:"",
        dob_day:"",
        dob_month:"",
        dob_year:"",
        gender_identity:"",
      })
    
      console.log("Form:", formData);

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
          value= {formData.full_name}
          onChange={handleChange}
        />
        <label htmlFor="education">Eğitim</label>
        <input
          type="text"
          id="education"
          name="education"
          placeholder="Eğitim"
          value= {formData.education}
          onChange={handleChange}
        />
        <label htmlFor="job">Meslek</label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="Meslek"
          value= {formData.job}
          onChange={handleChange}
        />
        <label htmlFor="city">Şehir</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Şehir"
          value= {formData.city}
          onChange={handleChange}
        />
        <label htmlFor="website">Web Sitesi</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="Websitesi"
          value= {formData.website}
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
        >

        </textarea>

        <label>Doğum Günü</label>
        <div className="multiple-input-container">
          <input
            type="number"
            id="dob_day"
            name="dob_day"
            placeholder="GG"
            required={true}
            value={formData.dob_day}
            onChange={handleChange}
          />
          <input
            type="number"
            id="dob_month"
            name="dob_month"
            placeholder="AA"
            required={true}
            value={formData.dob_month}
            onChange={handleChange}
          />
          <input
            type="number"
            id="dob_year"
            name="dob_year"
            placeholder="YYYY"
            required={true}
            value={formData.dob_year}
            onChange={handleChange}
            maxLength={4}
          />
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
        <input className="profileSettingsFormButton" type="submit" value="Bilgileri Güncelle" />

      </form>
      </div>
  )
}

export default ProfileSettingsForm