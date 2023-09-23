import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import SpecialProduct from "../components/SpecialProduct";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";
import { services } from "../utils/Data";
import CollarAzul from "../images/collarazul.jpg";
import ComederoClasico from "../images/comederoclasico1.jpg";
import MainBanner03 from "../images/main-banner-3.jpg";
import MainBanner06 from "../images/main-banner-6.jpg";
import ComederoAzul from "../images/comederoazul.jpg";
import CamaPerros from "../images/camaperros.jpg";
import CollarRosado from "../images/collarrosado.jpg";
import HuesoGoma from "../images/huesogoma.jpg";
import Hueso2 from "../images/hueso2.jpg";
import PlatoDoble from "../images/platodoble.jpg";
import CamaPerro from "../images/camaperros.jpg";
import PelotaDeGoma from "../images/pelotadegoma.jpg";
import Collar3 from "../images/collar3.jpg";
import CubreAsientos from "../images/cubreasientosmascotas.jpg";
import Famous04 from "../images/famous-04.jpg";
import Famous02 from "../images/famous-02.jpg";
import Famous01 from "../images/famous-01.jpg";
import Famous03 from "../images/famous-03.jpg";
import brand01 from "../images/brand-01.png";
import brand02 from "../images/brand-02.png";
import brand03 from "../images/brand-03.png";
import brand04 from "../images/brand-04.png";
import brand05 from "../images/brand-05.png";
import brand06 from "../images/brand-06.png";
import brand07 from "../images/brand-07.png";
import brand08 from "../images/brand-08.png";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src={MainBanner03}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Correa para tu mascota.</h4>
                <h5>Muy resistentes!</h5>
                <p>Desde 68$ hasta 348$ </p>
                <Link className="button">COMPRAR AHORA!</Link>
              </div>
            </div>
            <div className="main-banner position-relative p-3">
              <img
                src={MainBanner06}
                className="img-fluid w-100 h-200"
                alt="main banner"
              />
              <div className="main-banner-content_2 position-absolute">
                <h4>Cama para tu mascota.</h4>
                <h5>Muy cómodas!</h5>
                <p>Desde 190$ hasta 450$ </p>
                <Link className="button">COMPRAR AHORA!</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={ComederoAzul}
                  className="img-fluid w-100 h-100 rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Comedero Azul.</h4>
                  <h5>Muy duradero!</h5>
                  <p>Desde 150$ </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={CamaPerros}
                  className="img-fluid rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Cama</h4>
                  <h5>Muy resitente!</h5>
                  <p>Desde 1450$ </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={CollarRosado}
                  className="img-fluid w-100 rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Collar</h4>
                  <h5>Muy resitente!</h5>
                  <p>Desde 90$ </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={HuesoGoma}
                  className="img-fluid rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Hueso de juguete</h4>
                  <h5>Muy resistente!</h5>
                  <p>Desde 160$ </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={ComederoClasico}
                  className="img-fluid rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Comedero clásico</h4>
                  <h5>Muy duradero!</h5>
                  <p>Desde 490$ </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={CollarAzul}
                  className="img-fluid rounded-1 py-1"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Collar Azul</h4>
                  <h5>Muy resistente!</h5>
                  <p>Desde 190$ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 bg-white">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Juguetes</h6>
                  <p>13 items</p>
                  <img
                    className="image__categories"
                    src={Hueso2}
                    alt="juguete"
                  />
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Collares</h6>
                  <p>10 items</p>
                  <img
                    className="image__categories"
                    src={CollarAzul}
                    alt="juguete"
                  />
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Comederos</h6>
                  <p>8 items</p>
                  <img
                    className="image__categories"
                    src={PlatoDoble}
                    alt="juguete"
                  />
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Ropa, camas y cubreasientos</h6>
                  <p>8 items</p>

                  <img
                    className="image__categories"
                    src={CamaPerro}
                    alt="juguete"
                  />
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <img
                  className="image__categories"
                  src={PelotaDeGoma}
                  alt="juguete"
                />
              </div>
              <div className="d-flex  align-items-center">
                <div></div>
                <img
                  className="image__categories"
                  src={Collar3}
                  alt="collares"
                />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <img
                    className="image__categories"
                    src={ComederoClasico}
                    alt="comederos"
                  />
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <img
                    className="image__categories"
                    src={CubreAsientos}
                    alt="cubreasientos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2 bg-white">
        <div className="row">
          <h3 className="section-heading">Collección destacada</h3>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={Famous04} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>¡Resistente!</h5>
                <h6>Correa reflectiva</h6>

                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={Famous02} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>¡Duradero!</h5>
                <h6>Plato Doble con botella</h6>

                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={Famous01} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>¡Resistente!</h5>
                <h6>Correa reflectiva</h6>

                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={Famous03} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>¡Duradero!</h5>
                <h6>Plato Doble</h6>

                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2 bg-white">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Productos Especiales</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5 bg-white">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25 ">
                  <img className="brand__image" src={brand01} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand02} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand03} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand04} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand05} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand06} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand07} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img className="brand__image" src={brand08} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2 bg-white">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nuestros ultimos Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Blogcard />
          </div>
          <div className="col-3">
            <Blogcard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
