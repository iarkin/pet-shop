import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/Custominput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Olvidaste tu Contraseña"} />
      <BreadCrumb title="Olvidaste tu Contraseña" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Restablecer tu contraseña</h3>
              <p className="text-center mt-2 mb-3">
                Recibirás un email para restablecer tu contraseña
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                    <button className="button login border-1" type="submit">
                      Enviar
                    </button>

                    <Link
                      to="/login"
                      className="button login border border-danger"
                    >
                      Cancelar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
