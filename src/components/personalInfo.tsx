import type { PersonalInfoInteraface } from "../types/state";

interface PersonalInfoProps {
  personalInfo: PersonalInfoInteraface;
  setPersonalInfo: React.Dispatch<
    React.SetStateAction<PersonalInfoInteraface | undefined>
  >;
}

function PersonalInfo(props: PersonalInfoProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, field: string) {
    props.setPersonalInfo({ ...props.personalInfo, [field]: e.target.value });
    console.log(props.personalInfo);
  }

  return (
    <div className="form-container">
      <h4>Personal information</h4>
      <form>
        <fieldset className="form-field">
          <label htmlFor="name">Name</label>
          <input
            className="input-form"
            type="text"
            required
            id="name"
            onChange={(e) => handleChange(e, "name")}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="address">Address</label>
          <input
		  	className="input-form"
            type="text"
            required
            id="address"
            onChange={(e) => handleChange(e, "name")}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
			className="input-form"
            required
            id="telephone"
            onChange={(e) => handleChange(e, "name")}
          />
        </fieldset>

        <fieldset className="form-field">
          <span>Gender</span>
          <div>
            <input
              type="radio"
              required
              id="male"
              name="gender"
              value="male"
              onChange={(e) => handleChange(e, "gender")}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              required
              id="female"
              name="gender"
              value="female"
              onChange={(e) => handleChange(e, "gender")}
            />
            <label htmlFor="female">Female</label>
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="name">Nationality</label>
          <input
		  	className="input-form"
            type="text"
            required
            id="nationality"
            onChange={(e) => handleChange(e, "nationality")}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="name">Email</label>
          <input
		  	className="input-form"
            type="email"
            required
            id="email"
            onChange={(e) => handleChange(e, "email")}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default PersonalInfo;
