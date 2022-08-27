import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-heading">
            Let your skin Going
            <span className="img-wrapper">
              <img
                src="../../../assets/img/glow-lady.jpg"
                alt="glow lady"
                className="heading-img"
              />
            </span>
            Out
          </h1>
          <p className="hero-text">
            We want to bring to th world through our products that very special
            feeling, joy healthy and positive energy.
          </p>

          <div className="btn-group flexed">
            <button className="btn-primary flexed">
              Shop Now
              <span className="material-symbols-outlined east-icon">east</span>
            </button>

            <div className="play-wrapper flexed">
              <span className="material-symbols-sharp">play_arrow</span>
              <span className="how-to">How to use</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="../../../assets/img/curology-lady.webp"
            alt=""
            className="hero-img"
          />
        </div>
      </div>
      <div className="imgs-container">
        <img src="../../../assets/img/star.jpg" alt="star" className="star" />
        <img
          src="../../../assets/img/cream.png"
          alt="hand cream"
          className="cream"
        />
      </div>
      <div className="brand-section">
        <div className="brand-wrapper">
          <img
            src="../../../assets/img/curology2.jpeg"
            alt="curology"
            className="brand-wrapper-img"
          />
        </div>
        <div className="brand-details">
          <h3 className="brand-details-heading">
            The self care brand that's setting a new
            <span className="special-text">standard clean </span>
            products.
          </h3>
          <div className="details-grid">
            <div>
              <h6 className="details-grid-h6">Where are products made</h6>
              <p className="details-grid-p">
                Many brands especially in period care,carry products that take
                centuries
              </p>
            </div>
            <div>
              <h6 className="details-grid-h6">Where are products made</h6>
              <p className="details-grid-p">
                Many brands especially in period care,carry products that take
                centuries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
