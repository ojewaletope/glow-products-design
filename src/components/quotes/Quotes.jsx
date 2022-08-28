import "./Quotes.css";

const Quotes = () => {
  return (
    <div className="container">
      <div
        className="quotes-container"
        data-aos="fade-left"
        data-aos-duration="700"
      >
        <span>&bdquo;</span>

        <div className="grid-wrapper">
          <div>
            <p className="quotes">
              The UK jewellery awards is an event we always look forward to and
              we are honored to be recognised
            </p>
            <p className="quotes-name">Jane Cooper</p>
            <p className="quotes-location">Naperville, USA</p>
          </div>
          <div className="quotes-img-wrapper">
            <img
              src="../../../assets/img/new-lady.png"
              alt="singapore lady"
              className="quotes-img"
            />
          </div>
        </div>
      </div>
      <div className="brands-container">
        <div className="brand-img-wrapper">
          <img
            src="../../../assets/img/framesi_.png"
            alt="Framesi logo"
            className="brand-img"
          />
        </div>
        <div className="brand-img-wrapper">
          <img
            src="../../../assets/img/barione_.png"
            alt="Barione logo"
            className="brand-img"
          />
        </div>
        <div className="brand-img-wrapper">
          <img
            src="../../../assets/img/aloe-vera_.png"
            alt="aloe vera"
            className="brand-img"
          />
        </div>
        <div className="brand-img-wrapper">
          <img
            src="../../../assets/img/calvin_.png"
            alt="Calvin klein cosmetics logo"
            className="brand-img"
          />
        </div>
        <div className="brand-img-wrapper">
          <img
            src="../../../assets/img/vagoda_.png"
            alt="Vagoda logo"
            className="brand-img"
          />
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="1000">
        <div className="img-cards">
          <div className="img-card">
            <img
              src="../../../assets/img/curology-3.png"
              alt=""
              className="img"
            />
          </div>
          <div className="img-card">
            <img
              src="../../../assets/img/curology-4.png"
              alt=""
              className="img"
            />
          </div>
          <div className="img-card">
            <img
              src="../../../assets/img/curology-3.png"
              alt=""
              className="img"
            />
          </div>
          <div className="img-card icon-wrapper">
            <div>
              <i className="fa fa-instagram icon" aria-hidden="true"></i>
            </div>
            <p className="icon-text">
              Join us and get all the services we provide
            </p>
            <span className="material-symbols-outlined arrow">
              arrow_right_alt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
