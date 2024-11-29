import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch.js";

function Categories() {
  const recipes = useFetch(
    "https://rest-api-nodejs-production-d23f.up.railway.app/recetas/categorias"
  );
  return (
    <>
      <section className="categories flex-center" id="Recetas">
        <div className="container">
          <h2>Encuentra recetas por categorías</h2>
          <section className="categories-items">
            {recipes.map((recipe) => {
              return (
                <Link to={`/category/${recipe.categoria_id}`} state={recipe.categoria_nombre}>
                  <figure className="categories-figure flex-center">
                    <img
                      src={recipe.categoria_icono}
                      alt={recipe.categoria_nombre}
                      className="image-category"
                    />
                    <div className="banner">
                    <p className="banner-text">{recipe.categoria_nombre}</p>
                  </div>
                  </figure>
                  
                </Link>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}

export default Categories;
