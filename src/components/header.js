import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Logo from "../images/logo.png";
import Compare from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import User from "../images/user.svg";
import Cart from "../images/cart.svg";
import Menu from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 align-align-items-start">
              <p className="text-white mb-0">El lugar feliz de tu mascota</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Teléfono:
                <a className="text-white" href="tel: 473 75677">
                  473 75677
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white m-lg-3">
                  Estética canina.
                </Link>
              </h2>
              <Link to="/">
                <div className="logo__container w-50 col-4 m-lg-2">
                  <img src={Logo} className="logo img-thumbnail" alt="logo" />
                </div>
              </Link>
            </div>
            <div className="col-4">
              <div className="input-group input-group-lg">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <BsSearch className="fs-6" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Busca nuestros productos aquí"
                />
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={Compare} alt="compare"></img>
                    <p className="mb-0">
                      Comparar <br /> Productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={Wishlist} alt="wishlist"></img>
                    <p className="mb-0">
                      Productos <br /> Deseasdos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={User} alt="user"></img>
                    <p className="mb-0">
                      Iniciar <br /> Sesion
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={Cart} alt="cart"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg0-white text-white">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-botton d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={Menu} alt="" />
                      <span className="me-5 d-inline-block"> Categorías </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text" to="/">
                      Inicio
                    </NavLink>
                    <NavLink className="text" to="/product">
                      Nuestros Productos
                    </NavLink>
                    <NavLink className="text" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text" to="/contact">
                      Contacto
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
