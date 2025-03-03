import { useState, useRef } from "react";
import Objectives from "./Objectives";
import PersonalDetails from "./PersonalDetails";
import Prefrences from "./Prefrences";
import GreenCheckIcon from "@/assets/icons/green-check.svg";
import { Button } from "../ui/button";

export default function AssesmentSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const [objectivesError, setObjectivesError] = useState(false);
  const [preferencesError, setPreferencesError] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState<{
    programType: string;
    startDate: string;
  }>({ programType: "", startDate: "" });
  const formikRef = useRef<any>(null);

  const handleContinue = () => {
    if (currentStep === 1) {
      // Validate Objectives step
      if (selectedObjectives.length === 0) {
        setObjectivesError(true);
        return;
      }
      setObjectivesError(false);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Trigger form validation for step 2
      formikRef.current?.submitForm();
    } else if (currentStep === 3) {
      // Validate Preferences step
      if (!selectedPreferences.programType || !selectedPreferences.startDate) {
        setPreferencesError(true);
        return;
      }
      setPreferencesError(false);
      setCurrentStep(4);
    }
  };

  const handlePreferencesChange = (selections: {
    programType: string;
    startDate: string;
  }) => {
    setSelectedPreferences(selections);
    setPreferencesError(false);
  };

  return currentStep === 4 ? (
    <section className="min-h-[80vh] w-full flex justify-center items-center px-4 border-t border-[border-[#E1E1EF]]">
      <div className="w-full sm:max-w-[630px] text-center">
        <img src={GreenCheckIcon.src} alt="green-check" className="mx-auto" />
        <h2 className="text-5xl md:text-[56px] font-Bodonitown font-medium text-center px-4 mt-12 text-text leading-normal">
          Thank you! <br /> We'll contact you shortly
        </h2>
      </div>
    </section>
  ) : (
    <section className="min-h-[90vh] pt-11 md:pt-[68px] pb-12 md:pb-[106px] border-t border-[#E1E1EF]">
      <div className="sm:max-w-[618px] w-full mx-auto px-4">
        <div className="flex justify-between gap-2">
          <h6 className="text-text font-Bodonitown font-medium text-xl sm:text-2xl md:text-3xl">
            Objectives
          </h6>
          <h6 className="text-text font-Bodonitown font-medium text-xl sm:text-2xl md:text-3xl">
            Personal Details
          </h6>
          <h6 className="text-text font-Bodonitown font-medium text-xl sm:text-2xl md:text-3xl">
            Preferences
          </h6>
        </div>

        <div className="flex items-center gap-10 sm:gap-[50px] justify-center mt-[33px]">
          <div
            className={`w-full max-w-7 h-7 rounded-full ${
              currentStep === 1 ? "bg-secondary" : "bg-primary"
            }`}
          ></div>
          <div className="w-32 sm:w-28 h-[1px] bg-[#D9D9D9]"></div>
          <div
            className={`w-full max-w-7 h-7 rounded-full ${
              (currentStep === 1 && "bg-[#D9D9D9]") ||
              (currentStep === 2 && "bg-secondary") ||
              (currentStep === 3 && "bg-primary")
            }`}
          ></div>
          <div className="w-32 sm:w-28 h-[1px] bg-[#D9D9D9]"></div>
          <div
            className={`w-full max-w-7 h-7 rounded-full ${
              currentStep <= 2 ? "bg-[#D9D9D9]" : "bg-secondary"
            }`}
          ></div>
        </div>
      </div>

      {currentStep === 1 && (
        <Objectives
          onSelectionChange={setSelectedObjectives}
          error={objectivesError}
        />
      )}
      {currentStep === 2 && (
        <PersonalDetails
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formikRef={formikRef}
        />
      )}
      {currentStep === 3 && (
        <Prefrences
          onSelectionChange={handlePreferencesChange}
          error={preferencesError}
        />
      )}

      <div className="flex justify-center gap-[14px] mt-10 md:mt-[86px]">
        {currentStep > 1 && (
          <Button
            onClick={() => {
              if (currentStep === 2) {
                // Reset objectives state and error when going back to step 1
                setSelectedObjectives([]);
                setObjectivesError(false);
              } else if (currentStep === 3) {
                setPreferencesError(false); // Reset Preferences error
              }
              setCurrentStep(currentStep - 1); // Move back a step
            }}
            className="bg-white border border-primary text-primary hover:bg-white uppercase"
          >
            Back
          </Button>
        )}

        {currentStep <= 2 && (
          <Button className="bg-secondary text-black hover:bg-secondary/90 uppercase">
            Save
          </Button>
        )}
        {currentStep <= 2 && (
          <Button onClick={handleContinue} className="uppercase">
            Continue
          </Button>
        )}
        {currentStep === 3 && (
          <Button onClick={handleContinue} className="uppercase">
            Submit
          </Button>
        )}
      </div>
    </section>
  );
}
