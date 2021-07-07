import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import FormContainer from "../../../components/FormContainer";

import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { actions } from "../../../constants/userConstants";
import { callApi } from "../../../api";

export default function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      callApi(
        "/api/users/login/",
        "POST",
        { username: email, password },
        {
          SUCESS: actions.USER_LOGIN_SUCCESS,
          REQUEST: actions.USER_LOGIN_REQUEST,
          FAIL: actions.USER_LOGIN_FAIL,
        }
      )
    );
  };

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  return (
    <div style={{ marginTop: "10vh" }}>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <FormContainer style={{ marginTop: "10vh" }}>
            <h2>Login</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="user">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el nombre de usuario"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa la contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <span className="text-dark d-block text-center mt-4">
                Si no cuentas con una cuenta registrate{" "}
                <Link to="/register" style={{ color: "#333" }}>
                  aqui
                </Link>
              </span>
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
    </div>
  );
}
