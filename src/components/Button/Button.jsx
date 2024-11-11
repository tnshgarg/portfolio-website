import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ icon, title, downloadPath, onClick }) => {
  return onClick ? (
    <div onClick={onClick} className="btn-container">
      {/* <img src={icon} className="btn-icon" /> */}
      <i className={"material-icons md-18 btn-icon"}>{icon}</i>
      <p className="btn-text">{title}</p>
    </div>
  ) : (
    <a
      href={downloadPath && downloadPath}
      download="resume.pdf"
      className="btn-container"
    >
      {/* <img src={icon} className="btn-icon" /> */}
      <i className={"material-icons md-18 btn-icon"}>{icon}</i>
      <p className="btn-text">{title}</p>
    </a>
  );
};

export default Button;
