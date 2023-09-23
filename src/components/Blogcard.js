import React from "react";
import { Link } from "react-router-dom";
import MainBanner from "../images/main-banner-1.jpg";

const Blogcard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img className="img-fluid w-100 " src={MainBanner} alt="blog"></img>
      </div>
      <div className="blog-content">
        <p className="date">8 de septiembre del 2023</p>
        <h5 className="title">Los animales mejoran tu humor!</h5>
        <p className="description">
          Abrazar a tu perro mejora tu humor y baja el estrés.
        </p>
        <Link className="button">Leer más</Link>
      </div>
    </div>
  );
};

export default Blogcard;
