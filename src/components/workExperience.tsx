import React from "react";
import type { WorkExperienceInterface } from "../types/state";
import WorkExperienceForm from "./workExperienceForm";

interface workExperienceProps {
  workExperience: WorkExperienceInterface[];
  setWorkExperience: React.Dispatch<
    React.SetStateAction<WorkExperienceInterface[] | undefined>
  >;
}

function WorkExperience(props: workExperienceProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, field: string, id: string,
  ) {
    props.setWorkExperience(prev =>
        prev?.map(item => item.id === id ? {...item, [field]: e.target.value} : item)
    );
    
  }

  return (
    <>
      <div>Work Experience</div>
      <div>
        {props.workExperience.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <h3>{item.jobTitle}</h3>
              <WorkExperienceForm
                workExperience={item}
                handleChange={handleChange}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default WorkExperience;
