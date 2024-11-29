import React from "react";
import imagenAbout from "../../assets/imagen-prueba.jpg";
import Contact from "./Contact";
import ButtonBack from "../../components/ButtonBack/ButtonBack.jsx";

function About() {
  return (
    <>
      <section className="about flex-center">
        <div className="container">
          <div className="section-back">
            <ButtonBack />
          </div>
          <h2>Conoce sobre nosotros</h2>
          <section className="about-description flex-center">
            <figure className="about-figure">
              <img src={imagenAbout} alt="imagen-about" className="image" />
            </figure>
            <article className="about-info">
              <p>
                Todas las recetas presentadas en este sitio provienen de
                Antonia.
              </p>
              <p>
                Antonia nacio en Guerrero México y es el simbolo de armonia,
                amor y fortaleza para su familia, sus recetas siempre son
                reconocidas por su buen sazon.
              </p>
              <p>
                Plasmar sus recetas significa la trascendencia y legado que su
                familia conservarán para siempre con gran cariño.
              </p>
            </article>
          </section>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default About;
