import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Collar2Collores from "../images/collar2colores.jpg";
import ComederoOutward from "../images/comederooutwar.jpg";
import DogToy from "../images/dogtoy.jpg";

const SpecialProduct = () => {
  return (
    <div className="col-14 mb-4">
      <div className="speacial-product-card">
        <div className="d-flex justify-content-between">
          <div className="special__product-image">
            <img
              className="special-image img-fluid"
              src={Collar2Collores}
              alt="collar"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Kong Extreme</h5>
            <h6 className="title">Collar para tu perrito en dos colores.</h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$150 </span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>días
              </p>
              <div className="d-flex gap-10 align.align-items-cente2">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Productos: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Añadir al carrito</Link>
          </div>
          <div className="special__product-image">
            <img
              className="special-image img-fluid"
              src={ComederoOutward}
              alt="collar"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Outward Hound</h5>
            <h6 className="title">Comedero de alta calidad para tu perro</h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$550 </span> &nbsp; <strike>$670</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>días
              </p>
              <div className="d-flex gap-10 align.align-items-cente2">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Productos: 3</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Añadir al carrito</Link>
          </div>
          <div className="special__product-image">
            <img
              className="special-image img-fluid"
              src={DogToy}
              alt="collar"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Outward Hound</h5>
            <h6 className="title">
              Juguete interactivo para tu perrito en dos colores.
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$350 </span> &nbsp; <strike>$460</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>días
              </p>
              <div className="d-flex gap-10 align.align-items-cente2">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Productos: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Añadir al carrito</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
