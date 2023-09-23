import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/Custominput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Registrarse"} />
      <BreadCrumb title="Registrarse" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Iniciar Sesión</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Nombre" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="teléfono"
                  placeholder="Numero de teléfono"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                    <button className="button login">Registrarse</button>
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

export default SignUp;
