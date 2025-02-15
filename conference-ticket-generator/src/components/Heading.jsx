// eslint-disable-next-line react/prop-types
const Heading = ({ text, stepNum }) => {
  return (
    <div className="heading">
      <h2>{text}</h2>

      <p>
        Step <span>{stepNum}/3</span>
      </p>
    </div>
  );
};

export default Heading;
