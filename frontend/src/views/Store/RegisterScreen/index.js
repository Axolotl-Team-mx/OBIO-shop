import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import FormContainer from "../../../components/FormContainer";

import { Form, Button, Container } from "react-bootstrap";
import { actions } from "../../../constants/userConstants";
import { callApi } from "../../../api";

const initialState = {
  name: "",
  email: "",
  password: "",
};
export default function RegisterScreen({ history }) {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, success, userInfo, error } = userRegister;

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      callApi(
        "/api/users/register/",
        "POST",
        user,
        {
          SUCESS: actions.USER_REGISTER_SUCCESS,
          REQUEST: actions.USER_REGISTER_REQUEST,
          FAIL: actions.USER_REGISTER_FAIL,
        },
      )
    );
  };
  useEffect(() => {
    if (success) {
      dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: userInfo,
      });
      history.push("/");
    }
  }, [history, success]);
  return(
    <FormContainer style={{ marginTop: "10vh" }}>
    <main>
      {loading ? (
        <Loader />
      ) : (
        <FormContainer style={{ marginTop: "10vh" }}>
          <h2>Register</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="user">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de usuario"
                name="name"
                required
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa el correo"
                required
                name="email"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa la contraseña"
                required
                name="password"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button className="mb-2" type="submit" variant="primary">
              Iniciar sesión
            </Button>
            {error && (
              <Message variant="danger" style={{ marginTop: "25px" }}>
                Usuario o contraseña incorrectos
              </Message>
            )}
          </Form>
        </FormContainer>
      )}
    </main>
  </FormContainer>
  )
}
