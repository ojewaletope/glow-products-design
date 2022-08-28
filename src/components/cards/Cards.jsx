import Card from "../card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="cards-wrapper">
        <div data-aos="fade-up" data-aos-duration="1100">
          <h2 className="heading-2">
            Trending on <span className="special-text">Essentials</span>
          </h2>
          <p className="p-text">
            Made with nature's best ingredients - our product's transparent
            ingredient. Fear of God Essentials
          </p>
          <button className="card-btn flexed">
            Browse All Products
            <span className="material-symbols-outlined east-icon">east</span>
          </button>
        </div>
        <Card
          img="../../../assets/img/curology-4.jpeg"
          title="Shower Butter"
          price="$180.99"
        />
        <Card
          img="../../../assets/img/curology-4.jpeg"
          title="Shower Butter"
          price="$180.99"
          icon="lock"
          iconSecond="favorite"
        />
        <Card
          img="../../../assets/img/curology-4.jpeg"
          title="Shower Butter"
          price="$180.99"
        />
        <Card
          img="../../../assets/img/curology-4.jpeg"
          title="Shower Butter"
          price="$180.99"
        />
        <Card
          img="../../../assets/img/curology-4.jpeg"
          title="Shower Butter"
          price="$180.99"
        />
      </div>
    </div>
  );
};

export default Cards;
