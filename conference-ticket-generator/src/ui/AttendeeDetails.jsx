import Form from "../components/Form";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";

// eslint-disable-next-line react/prop-types
const AttendeeDetails = ({ setMoveToStep, moveToStep }) => {
  return (
    <div className="main-content">
      <Heading text="Attendee details" stepNum={2} />
      <ProgressBar step={2} />

      <div className="attendee-form-container">
        <Form setMoveToStep={setMoveToStep} moveToStep={moveToStep} />
      </div>
    </div>
  );
};

export default AttendeeDetails;
