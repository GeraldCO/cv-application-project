export interface PersonalInfoInteraface {
  name: string;
  address: string;
  telephone: string;
  gender: string;
  nationality: string;
  email: string;
}

export const initialPersonalInfo = {
    name: "",
    address: "",
    telephone: "",
    gender: "",
    nationality: "",
    email: ""
  };

  export interface WorkExperienceInterface {
    id: string, 
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string, 
    description: string
  }

  export const initialWorkExperience = {
    id: ":r5:",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: ""
  }