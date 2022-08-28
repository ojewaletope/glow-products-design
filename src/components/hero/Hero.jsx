import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <h1
            className="hero-heading"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
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
          <p
            className="hero-text"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            We want to bring to th world through our products that very special
            feeling, joy healthy and positive energy.
          </p>

          <div
            className="btn-group flexed"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
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
        <div className="hero-right" data-aos="fade-up" data-aos-duration="2600">
          <img
            src="../../../assets/img/curology-lady.webp"
            alt=""
            className="hero-img"
          />
        </div>
      </div>

      <div className="brand-section">
        <div data-aos="fade-up" data-aos-duration="2000" style={{ zIndex: 4 }}>
          <div className="brand-wrapper">
            <img
              src="../../../assets/img/curology2.jpeg"
              alt="curology"
              className="brand-wrapper-img"
            />
          </div>
        </div>
        <div className="brand-details">
          <div className="imgs-container">
            <img
              src="../../../assets/img/star.jpg"
              alt="star"
              className="star"
            />
            <img
              src="../../../assets/img/cream_.png"
              alt="hand cream"
              className="cream"
            />
          </div>
          <h3
            className="brand-details-heading"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            The self care brand that's setting a new
            <span className="special-text">standard clean </span>
            products.
          </h3>
          <div
            className="details-grid"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
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
