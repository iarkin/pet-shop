/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { IoIosGitCompare } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import Container from "../components/Container";

const Singleproduct = () => {
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 500,
    img: "https://puppiauy.com/cdn/shop/products/farren1_1080x.jpg?v=1586111422",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Arnés Puppia para tu perro, varios colores, muy resistente!
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$1600</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(3 Opiniones)</p>
                </div>
                <a className="review-btn" href="#review  ">
                  Dejanos tu opinión
                </a>
              </div>
              <div className="border-bottom py-3 ">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tipo:</h3>
                  <p className="product-data ">Cama</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Marca:</h3>
                  <p className="product-data ">PUPPIA</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categoría:</h3>
                  <p className="product-data ">Cama</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Etiquetas:</h3>
                  <p className="product-data ">Camas</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Disponibles:</h3>
                  <p className="product-data ">En Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Tamaño:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark boder-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark boder-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark boder-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark boder-secondary">
                      XLL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Cantidad:</h3>
                  <div className="">
                    <input
                      type="number"
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button  border " type="submit">
                      Añadir al carrito
                    </button>
                    <button to="/signup" className="button  border">
                      Comprar Ahora
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      {" "}
                      <IoIosGitCompare className="fs-5 m-2" /> Añadir a Comparar
                      Productos
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <MdFavoriteBorder className="fs-5 m-2" />
                      Añadir a Lista de Deseados
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Descripción del producto</h4>
            <div className="bg-white p-3">
              <p>
                Arnés comodo para tu perrito, muy resistente y de excelente
                <calidad className=""></calidad>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Opiniones</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Opiniones de clientes</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">
                        Basado en 3 opiniones de distintos clientes
                      </p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="#"
                      >
                        Danos tu opinión
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Escribe tu opinión</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comentarios"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">
                        Enviar Opinión
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Richelle</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">Excelente producto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Productos Populares</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default Singleproduct;
