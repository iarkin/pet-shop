import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Nuestros Productos"} />
      <BreadCrumb title="Nuestros Productos" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Tienda por Categorías</h3>
              <div>
                <ul className="ps-0">
                  <li>Juguetes</li>
                  <li>Camas</li>
                  <li>Ropa</li>
                  <li>Accesorios</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtros</h3>
              <div>
                <h5 className="sub-title">Disponibles</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id=""
                    />
                    <label className="forn-check-label" htmlFor="">
                      En stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id=""
                    />
                    <label className="forn-check-label" htmlFor="">
                      Sin stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Precios</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Desde"
                    />
                    <label htmlFor="floatingInput">Desde</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Hasta"
                    />
                    <label htmlFor="floatingInput1">Hasta</label>
                  </div>
                </div>
                <h5 className="sub-title">Colores</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Tamaño</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id="color-1"
                    />
                    <label className="forn-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id="color-2"
                    />
                    <label className="forn-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Productos por Etiquetas</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Juguetes
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Camas
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Ropa
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Comederos
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Accesorios
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Productos Aleatorios</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/rama.jpg"
                      className="img-fluid"
                      alt="rama"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Juguete para tu perrito, bastante resistente.</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 190</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/platonegro.jpg"
                      className="img-fluid"
                      alt="platonegro"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Plato negro, muy duradero.</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 290</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Clasificar por:</p>
                  <select
                    defaultValue={"manual"}
                    name=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Presetandos</option>
                    <option value="best-seling">Más vendido </option>
                    <option value="title-ascending">Alfabéticamente A-Z</option>
                    <option value="title-descending">
                      Alfabéticamente Z-A
                    </option>
                    <option value="price-ascending">
                      Ordenar por precio, bajo a alto
                    </option>
                    <option value="price-descending">
                      Ordenar por precio, alto a bajo
                    </option>
                    <option value="create-ascending">
                      Fecha de publicación
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0" style={{ width: "100px" }}>
                    21 Productos
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      role="button"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      role="button"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      role="button"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      role="button"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5 bg-white">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

//4:02:34
