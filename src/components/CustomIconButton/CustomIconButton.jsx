import "./CustomIconButton.css"

// eslint-disable-next-line react/prop-types
const CustomIconButton = ({icon, link}) => {
  return (
    <div className="icon-container">
        <a className="a-icon" href={link}>
      <img src={icon} className="icon-btn" />
      </a>
    </div>
  )
}

export default CustomIconButton
