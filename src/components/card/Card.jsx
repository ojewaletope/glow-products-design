import "./Card.css";
const Card = ({
  img,
  title,
  price,
  icon,
  iconName,
  iconSecond,
  iconSecondName,
}) => {
  return (
    <div
      className="card-container"
      data-aos="fade-left"
      data-aos-duration="1100"
    >
      <div className="card">
        <div className="card-img-wrapper">
          <img src={img} alt="card img" />
          {icon && (
            <div className="icons-wrapper">
              {/* <i className={icon} aria-hidden="true"></i> */}
              <span className="material-symbols-outlined lock-icon">
                {icon}
              </span>
              <span className="material-symbols-outlined heart-icon">
                {iconSecond}
              </span>
            </div>
          )}
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
