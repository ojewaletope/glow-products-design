import "./Quotes.css";

const Quotes = () => {
  return (
    <div className="container">
      <div className="quotes-container">
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
    </div>
  );
};

export default Quotes;
