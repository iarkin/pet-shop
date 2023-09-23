import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Productos Deseados"} />
      <BreadCrumb title="Productos Deseados" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/camaperros.jpg"
                  className="img-fluid w-100"
                  alt="cama"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Cama gris, resistente y comoda</h5>
                <h6 className="price">$ 1350</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/famous-02.jpg"
                  className="img-fluid w-100"
                  alt="cama"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Comedero doble</h5>
                <h6 className="price">$ 750</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
