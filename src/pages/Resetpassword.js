import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/Custominput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Restablecer Contraseña"} />
      <BreadCrumb title="Restablecer Contraseña" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Restablecer Contraseña</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />

                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirmar Contraseña"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                    <button className="button login">Confirmar</button>
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

export default Resetpassword;
