import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import WorkExperience from "./components/workExperience";
import {
  initialWorkExperience,
  type PersonalInfoInteraface,
  type WorkExperienceInterface,
} from "./types/state";
import Header from "./components/header";

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoInteraface>();
  const [workExperience, setWorkExperience] = useState<
    WorkExperienceInterface[] | undefined
  >([initialWorkExperience]);

  return (
    <>
      <div className="">
        <Header />
        <div className="flex gap-6">
          <div className="w-2/5 space-y-6">
            <PersonalInfo
              personalInfo={personalInfo!}
              setPersonalInfo={setPersonalInfo!}
            />
            <WorkExperience
              workExperience={workExperience!}
              setWorkExperience={setWorkExperience!}
            />
          </div>
          <div className="w-3/5ß">
            <h1>Display</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
