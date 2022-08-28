import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div
          className="footer-wrapper"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="footer-item">
            <div className="logo_container" data-aos="fade-down">
              <img
                src="../../../assets/img/glow-logo.jpg"
                alt="Glow logo"
                className="footer-logo"
              />
            </div>
            <p className="footer-text">
              Keep up with our new releases, beauty tips and what emma's been up
              to
            </p>
            <div className="social-icons">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </div>
          <div className="footer-item">
            <h4 className="item-heading">Company</h4>
            <ul className="footer-lists">
              <li className="list-item">
                <a href="#" className="list-item-link">
                  About
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Jobs
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Branding
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="item-heading">Resources</h4>
            <ul className="footer-lists">
              <li className="list-item">
                <a href="#" className="list-item-link">
                  College
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Support
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Safety
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Streamkit
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="item-heading">Terms & Condition</h4>
            <ul className="footer-lists">
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Policy
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Faq
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Return & Delivery
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-item-link">
                  Tracking
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="item-heading">Subscribe</h4>
            <p className="footer-text">Get 10% off your first order</p>

            <div className="input-wrapper flexed">
              <input
                type="text"
                placeholder="Enter your email"
                className="footer-input"
              />
              <span className="material-symbols-outlined send-icon">send</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright &copy;2022 Musemind | All Rights Resereved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
