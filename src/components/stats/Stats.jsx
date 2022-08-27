import "./Stats.css";

const Stats = () => {
  return (
    <div className="container">
      <div className="stats-wrapper">
        <div className="stats">
          <h1 className="stats-heading">
            We make going all natural
            <span className="special-text"> Beauty</span>
          </h1>
          <p className="stats-text">
            Made with nature's best ingredients - our products' transparent
            ingredient lists allow you to know
          </p>

          <div className="product-stats">
            <div className="stats-users">
              <p className="stats-title">Product Users</p>
              <p className="stat-text">7M+</p>
            </div>
            <div className="stats-products">
              <p className="stats-title">Brand Product</p>
              <p className="stat-text">99+</p>
            </div>
            <div className="stats-review">
              <p className="stats-title">Product Reviews</p>
              <p className="stat-text">5M</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="../../../assets/img/new-lady.png"
            alt="brunette"
            className="stats-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
