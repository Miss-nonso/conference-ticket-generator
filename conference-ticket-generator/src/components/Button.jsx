// eslint-disable-next-line react/prop-types
const Button = ({ btnText, type, action }) => {
  return (
    <button onClick={action && action} className={`${type && type}`}>
      {btnText}
    </button>
  );
};

export default Button;
