import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import ArnesPuppia from "../images/catbanner-02.jpg";
import CamaPuppia2 from "../images/catbanner-03.jpg";
import CamaPuppia from "../images/catbanner-01.jpg";
import ComederoBlanco from "../images/famous-02.jpg";
import CorreaDosColores from "../images/famous-01.jpg";
import PelotaGoma from "../images/pelotadegoma2.jpg";
import PlatoNegro from "../images/platonegro.jpg";
import Collar3 from "../images/collar3.jpg";
import BananaToy from "../images/banana.jpg";
import Capa from "../images/catbanner-04.jpg";
import Manopla from "../images/famous-04.jpg";
import CamaBedsure from "../images/camaperros.jpg";
import WishlistIcon from "../images/wish.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={ArnesPuppia} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PUPPIA</h6>
            <h5 className="product-title">Arnés</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Arnés muy resistente para tu perro!
            </p>
            <p className="price">1430.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={CamaPuppia2} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PUPPIA</h6>
            <h5 className="product-title">Cama en dos colores</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Cama muy comoda y caliente para tu perro.
            </p>
            <p className="price">1600.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={CamaPuppia} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PUPPIA</h6>
            <h5 className="product-title">Cama en dos colores</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Cama muy comoda para tu mascota.
            </p>
            <p className="price">1780.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={ComederoBlanco} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">BAAPET</h6>
            <h5 className="product-title">Comedero doble blanco</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Cama muy comoda y caliente para tu perro.
            </p>
            <p className="price">1250.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={CorreaDosColores} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PHOEPET</h6>
            <h5 className="product-title">Correa en dos colores</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Muy resistente!
            </p>
            <p className="price">750.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={PelotaGoma} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">KONG EXTREME</h6>
            <h5 className="product-title">Pelota de goma</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Pelota de goma para que tu perro se juegue!
            </p>
            <p className="price">190.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={PlatoNegro} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">ICEFANG</h6>
            <h5 className="product-title">Plato negro</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Plato negro muy resistente, ideal para tu mascota!
            </p>
            <p className="price">390.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={Collar3} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PHOEPET</h6>
            <h5 className="product-title">Collar negro</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Collar negro, muy resistente!
            </p>
            <p className="price">290.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={BananaToy} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">OUTWARD HOUND</h6>
            <h5 className="product-title">Banana de juguete</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Banana de jueguete para tu perro
            </p>
            <p className="price">1600.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={Capa} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">PUPPIA</h6>
            <h5 className="product-title">Capa</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Capa muy resistente para tu perro.
            </p>
            <p className="price">1499.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={Manopla} alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">BAAPET</h6>
            <h5 className="product-title">Manopla para pelos</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Manopla resistente y comada para tu mascota.
            </p>
            <p className="price">790.00$</p>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={WishlistIcon} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={CamaBedsure} alt="product" />
          </div>

          <div className="product-details">
            <h6 className="brand">BEDSURE</h6>
            <h5 className="product-title">Cama ultra resistente!</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Cama muy comoda y caliente para tu perro.
            </p>
            <p className="price">1590.00$</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
