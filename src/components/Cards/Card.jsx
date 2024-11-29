import React from "react";
import {Link} from 'react-router-dom'
import './card.css'

function Card(props) {
  return (
    <>
      <article className="card">
        <figure className="card-figure">
            <img src={props.imagen} alt="" className="card-image" />
        </figure>
        <div className="card-info">
        <h3>{props.name}</h3>
        <Link to={props.enlace}>
          <li className="btn-primary">Ver receta</li>
        </Link>
        </div>
      </article>
    </>
  );
}

export default Card;
