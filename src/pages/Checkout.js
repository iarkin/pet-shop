import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CamaPuppia from "../images/catbanner-03.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container className="container-checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Happy Pet</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Carrito
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Información
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">Envío</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Pago
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Información de contacto</h4>
              <p className="user-details total">
                Happy Pet (happypet@gmail.com)
              </p>
            </div>
            <h4 className="mb-3">Dirección de envío</h4>
            <form
              action=""
              className="d-flex flex-wrap gap-15 justify-content-between "
            >
              <div className="w-100">
                <select name="" className="form-control form-select" id="">
                  <option value="" selected disabled>
                    Seleccionar País
                  </option>
                </select>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Nombres"
                  className="form-control"
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="form-control"
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Dirección"
                  className="form-control"
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Apartamento, casa, etc"
                  className="form-control"
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="form-control"
                />
              </div>
              <div className="flex-grow-1">
                <select name="" className="form-control form-select" id="">
                  <option value="" selected disabled>
                    Seleccionar Departamento
                  </option>
                </select>
              </div>
              <div className="flex-grow-1">
                {" "}
                <input
                  type="text"
                  placeholder="Codigo Postal"
                  className="form-control"
                />
              </div>
              <div className="w-100 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="text-dark">
                    <IoIosArrowBack className="me-1" /> Volver al carrito
                  </Link>
                  <Link to="/product" className="button">
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src={CamaPuppia} alt="" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">Cama PUPPIA</h5>
                    <p className="total-price">S / #3415EDB</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 970</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 1400</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envío</p>
                <p className="mb-0 total-price">$ 1600</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1600</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
