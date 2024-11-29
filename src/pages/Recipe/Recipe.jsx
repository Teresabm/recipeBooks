import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import ButtonBack from "../../components/ButtonBack/ButtonBack.jsx";
import "./recipe.css";

function Recipe() {
  const recipeId = useParams();
  console.log(recipeId);
  const recipes = useFetch(
    `https://rest-api-nodejs-production-d23f.up.railway.app/recetas/receta/${recipeId.id}`
  );
  const recipeDatas = useFetch(
    `https://rest-api-nodejs-production-d23f.up.railway.app/recetas/detalles/${recipeId.id}`
  );
  return (
    <>
      <section className="recipe flex-center">
        <div className="container">
          <div className="recipe-back">
            <ButtonBack />
          </div>
          {recipeDatas.map((recipeData) => {
            return <h2>{recipeData.receta_nombre}</h2>;
          })}
          <div className="recipe-information">
            <section className="recipe-principal">
              <article className="recipe-ingredients">
                <h3>Ingredientes</h3>
                {recipes.map((recipe) => {
                  return (
                    <ul key={recipe.descripcion_id}>
                      <li>
                        {recipe.cantidad} {recipe.gramaje_nombre}{" "}
                        {recipe.ingrediente_nombre}
                      </li>
                    </ul>
                  );
                })}
              </article>
              <article className="recipe-procedimient">
                <h3>Procedimiento</h3>
                {recipeDatas.map((recipeData) => {
                  return (
                    <p key={recipeData.receta_id}>{recipeData.procedimiento}</p>
                  );
                })}
              </article>
            </section>
            <section className="recipe-secondary ">
              {recipeDatas.map((recipeData) => {
                return (
                  <article
                    className="recipe-illustrative "
                    key={recipeData.receta_id}
                  >
                    <figure className="recipe-figure ">
                      <img
                        src={recipeData.imagen}
                        alt={recipeData.receta_id}
                        className="image image-recipe"
                      />
                    </figure>
                    <p>Porciones: {recipeData.porciones}</p>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recipe;
