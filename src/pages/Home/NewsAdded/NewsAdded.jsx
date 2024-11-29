import React from "react";
import { useFetch } from "../../../hooks/useFetch.js";
import Card from "../../../components/Cards/Card.jsx";

function NewsAdded() {
  const recipes = useFetch(
    "https://rest-api-nodejs-production-d23f.up.railway.app/recetas/recientes"
  );
  return (
    <>
      <section className="news-add flex-center">
        <div className="container">
          <h2>No te pierdas de estas recetas recien agregadas.</h2>
          <div className="news-items">
            {recipes.map((recipe) => {
              return (
                <Card
                  imagen={recipe.imagen}
                  name={recipe.receta_nombre}
                  enlace={`/recipe/${recipe.receta_id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsAdded;
