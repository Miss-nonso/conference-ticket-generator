// eslint-disable-next-line react/prop-types
const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-status"
        style={{ width: `calc(${step * 33.33}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
