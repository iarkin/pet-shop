/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img
                  className="footer__img"
                  src={Newsletter}
                  alt="newsletter"
                />
                <h2 className="mb-0 text-white">
                  Registrate para más información
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  aria-label="Ingresa tu email"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Ingresa tu email"
                />
                <span
                  className="input-group-text p-2"
                  id="inputGroup-sizing-lg"
                >
                  Suscribite!
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 mb-4">
              <h4 className="text-white">Contactanos</h4>
              <div>
                <address className="text-white fs-6">
                  Dirección: Calle Uruguay 9999, <br /> Salto, Uruguay <br />
                  Codigo Postal: 50000
                </address>
                <a
                  href="tel: 473 75677"
                  className="mt-3 d-block mb-1 text-white"
                >
                  473 75677
                </a>
                <a
                  href="email: happypet@gmail.com"
                  className="mt-4 d-block mb-0 text-white"
                >
                  happypet@gmail.com
                </a>
                <div className="social__icons d-flex align-items-center gap-15 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="text-white fs-2" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="text-white fs-2" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="text-white fs-2" />
                  </a>
                  <a className="text-white" href="#">
                    <BsFacebook className="text-white fs-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 mb-4">
              <h4 className="text-white">Información</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Políticas de privacidad
                </Link>
                <Link className="text-white py-2 mb-1">
                  Políticas de reembolso
                </Link>
                <Link className="text-white py-2 mb-1">Políticas de envío</Link>
                <Link className="text-white py-2 mb-1">
                  Terminos y condiciones
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3 mb-4">
              <h4 className="text-white">Cuenta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre nosotros</Link>
                <Link className="text-white py-2 mb-1">
                  Preguntas frecuentes
                </Link>
                <Link className="text-white py-2 mb-1">Contactanos</Link>
              </div>
            </div>
            <div className="col-2 mb-4">
              <h4 className="text-white">Enlaces rapidos</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Ropa</Link>
                <Link className="text-white py-2 mb-1">Juguetes</Link>
                <Link className="text-white py-2 mb-1">Comida</Link>
                <Link className="text-white py-2 mb-1">Accesorios</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Copyright / Happy Pet
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
