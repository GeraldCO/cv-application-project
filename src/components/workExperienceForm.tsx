import type { WorkExperienceInterface } from "../types/state";

interface WorkExperienceFormProps {
  workExperience: WorkExperienceInterface;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    id: string,
  ) => void;
}

function WorkExperienceForm(props: WorkExperienceFormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, field: string) {
    props.handleChange(e, field, props.workExperience.id);
  }
  return (
    <div className="form-container">
      <form action="">
        <fieldset className="form-field">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            className="input-form"
            type="text"
            required
            id="jobTitle"
            value={props.workExperience.jobTitle}
            onChange={(e) => handleChange(e, "jobTitle")}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="company">Company</label>
          <input
            className="input-form"
            type="text"
            required
            id="company"
            value={props.workExperience.company}
            onChange={(e) => handleChange(e, "company")}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="startDate">Start Date</label>
          <input
            className="input-form"
            type="month"
            required
            id="startDate"
            value={props.workExperience.startDate}
            onChange={(e) => handleChange(e, "startDate")}
          />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="endDate">End Date</label>
          <input
            className="input-form"
            type="month"
            required
            id="endDate"
            value={props.workExperience.endDate}
            onChange={(e) => handleChange(e, "endDate")}
          />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="description">Description</label>
          <input
            className="input-form"
            type="text"
            required
            id="description"
            value={props.workExperience.description}
            onChange={(e) => handleChange(e, "description")}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
