import Accordion from "../accordion/Accordion";
import "./AccordionSection.css";

const panels = [
  {
    label: "Where are products made",
    content:
      "Many brands, especially in period care, carry products that takes centuries to bioderadewith pronounce",
  },
  {
    label: "How to purchase our product?",
    content:
      "Many brands, especially in period care, carry products that takes centuries to bioderadewith pronounce",
  },
  {
    label: "How to purchase our product?",
    content:
      "Many brands, especially in period care, carry products that takes centuries to bioderadewith pronounce",
  },
];

const AccordionSection = () => {
  return (
    <div className="container">
      <div
        className="accordion-wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="accordion-img-wrapper">
          <img
            src="../../../assets/img/cream_.png"
            alt="cram"
            className="accordion-img"
          />
        </div>
        <div className="accordion-container">
          <h1 className="accordion-heading">
            You have <span className="special-text">questions</span>, we have
            answers
          </h1>
          <Accordion panels={panels} />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
