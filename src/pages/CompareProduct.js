import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
import CatBanner03 from "../images/catbanner-03.jpg";
import CatBanner01 from "../images/catbanner-01.jpg";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Comparar Productos"} />
      <BreadCrumb title="Comparar Productos" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src={CatBanner03}
                  alt="catbanner"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Cama Puppia</h5>
                <h6 className="price mb-2 mt-3">$180</h6>
                <div>
                  <div className="product-detail d-flex">
                    <h5>Marca:</h5>
                    <p>PUPPIA</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Tipo:</h5>
                    <p>Cama</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Disponibilidad:</h5>
                    <p>En stock</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Tamaño:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src={CatBanner01}
                  alt="platodoble"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Cama Olchi</h5>
                <h6 className="price mb-2 mt-3">$180</h6>
                <div>
                  <div className="product-detail d-flex">
                    <h5>Marca:</h5>
                    <p>Olchi</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Tipo:</h5>
                    <p>Cama</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Disponibilidad:</h5>
                    <p>En stock</p>
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex">
                    <h5>Tamaño:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
