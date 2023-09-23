import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/Custominput";

const Login = () => {
  return (
    <>
      <Meta title={"Iniciar Sesión"} />
      <BreadCrumb title="Iniciar Sesión" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Iniciar Sesión</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <div>
                  <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                    <button className="button login border-1" type="submit">
                      Iniciar Sesión
                    </button>
                    <Link to="/signup" className="button signup">
                      Regístrate
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

export default Login;
