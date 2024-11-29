import React from "react";
import imagePic1 from "../../../assets/img-hero-01.png";
import imagePic2 from "../../../assets/img-hero-02.png";
import imagePic3 from "../../../assets/img-hero-03.png";

function Hero() {
  return (
    <>
      <section className="hero flex-center">
        <div className="container">
          <h1>Recetas de cocina</h1>
          <p className="hero-subtitle">
            Colección de recetas de cocina tradicional
          </p>
        </div>
        <div className="hero-pics">
          <figure className="hero-picture">
            <img src={imagePic1} alt="pic-01" className="image" />
          </figure>
          <figure className="hero-picture">
            <img src={imagePic2} alt="pic-02" className="image" />
          </figure>
          <figure className="hero-picture">
            <img src={imagePic3} alt="pic-03" className="image" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
