import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CamaPuppia from "../images/catbanner-03.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Color from "../components/Color";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Carrito"} />
      <BreadCrumb title="Carrito" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Producto</h4>
              <h4 className="cart-col-2">Precio</h4>
              <h4 className="cart-col-3">Cantidad</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={CamaPuppia} className="img-fluid" alt="product" />
                </div>
                <div className="w-75">
                  <p>Cama PUPPIA</p>
                  <p>Size: M</p>
                  <p>
                    Color: <Color />
                  </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 1250</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <RiDeleteBin6Line className="text-danger fs-5" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 1250</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Volver a la tienda
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $1000</h4>
                <p>
                  Los impuestos y el envío se calculan al finalizar la compra.
                </p>
                <Link to="/checkout" className="button">
                  Verificar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
