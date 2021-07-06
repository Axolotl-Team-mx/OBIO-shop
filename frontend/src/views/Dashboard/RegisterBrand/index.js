import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../../../components/FormContainer";
import LoaderLogo from "../../../components/LoaderLogo";
import Message from "../../../components/Message";

import { actions } from "../../../constants/brandConstants";
import { callApi } from "../../../api";

const initialState = {
  name: "",
  description: "",
};
export default function RegisterBrand({ history }) {
  const [brand, setBrand] = useState(initialState);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const brandRegister = useSelector((state) => state.brandRegister);
  const { loading, error, success } = brandRegister;

  const handleChange = (event) => {
    setBrand({
      ...brand,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      callApi("/api/brands/createbrand/", "POST", brand, {
        SUCESS: actions.BRAND_REGISTER_SUCCESS,
        REQUEST: actions.BRAND_REGISTER_REQUEST,
        FAIL: actions.BRAND_REGISTER_FAIL,
      }, false, userInfo.token)
    );
  };

  useEffect(() => {
    // if (!userInfo) history.push("/");
    if (success) history.push("/admin/categorias/");
    dispatch({
      type: actions.BRAND_REGISTER_RESET,
    });
  }, [history, userInfo, success]);

  return (
    <div style={{ marginTop: "10vh" }}>
      <main>
        <FormContainer>
          <h2>Registrar marca</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nombre de marca</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa el nombre de la marca"
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Descripcion de la marca</Form.Label>
              <Form.Control
                type="text"
                as='textarea'
                name="description"
                placeholder="Ingresa la descripcion de la marca"
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            {loading ? (
              <LoaderLogo />
            ) : error ? (
              <>
                <Message variant="danger">{error}</Message>
                <Button type="submit" variant="primary">
                  Registrar categoría
                </Button>
              </>
            ) : (
              <Button type="submit" variant="primary">
                Registrar marca
              </Button>
            )}
          </Form>
        </FormContainer>
      </main>
    </div>
  );
}
