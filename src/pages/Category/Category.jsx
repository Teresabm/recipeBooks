import React from "react";
import { useParams, useLocation  } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import Card from "../../components/Cards/Card.jsx";
import ButtonBack from "../../components/ButtonBack/ButtonBack.jsx";
import "./category.css";

function Category() {
  const categoryId = useParams();
  const location = useLocation()
  const state = location.state
  const recipes = useFetch(
    `https://rest-api-nodejs-production-d23f.up.railway.app/recetas/categoria/${categoryId.id}`
  );
  return (
    <>
      <section className="category flex-center">
        
        <div className="container">
          <div className="section-back">
              <ButtonBack/>
          </div>
        <h2>{state}</h2>
          <section className="category-items">
            {recipes.map((recipe) => {
              return (
                <Card
                  imagen={recipe.imagen}
                  name={recipe.receta_nombre}
                  enlace={`/recipe/${recipe.receta_id}`}
                />
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}

export default Category;
