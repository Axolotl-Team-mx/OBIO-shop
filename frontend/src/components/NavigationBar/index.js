import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import logo1 from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./styles.css";

import { actions } from "../../constants/userConstants";
export default function NavigationBar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Navbar
      sticky="top"
      bg="light"
      collapseOnSelect
      expand="lg"
      className="text-warning"
      style={{ fontWeight: "bold" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img height="40" src={logo1} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar1" />
        <Navbar.Collapse id="navbar1" style={{justifyContent: "flex-end"}}>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <i class="fas fa-home"></i>Inicio
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products/">
              <Nav.Link>
                {" "}
                <i class="fas fa-shopping-basket"></i> Tienda
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Form onSubmit={(e) => e.preventDefault()} className="d-flex">
              <FormControl
                type="search"
                placeholder="Busca un articulo"
                className="mr-3"
                aria-label="Search"
                // value={search}
                // onChange={(e)=>setSearch(e.target.value)}
              ></FormControl>
              <LinkContainer to={`/searchproducts/`}>
                <Button variant="warning">
                  <i class="fas fa-search"></i>
                </Button>
              </LinkContainer>
            </Form>
            {userInfo ? (
              <>
                <NavDropdown title="Cuenta">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={() => dispatch({ type: actions.USER_LOGOUT })}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                {userInfo.isAdmin && (
                  <NavDropdown title="Admin">
                    <LinkContainer to="/products/list">
                      <NavDropdown.Item>Productos</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/categories/">
                      <NavDropdown.Item>Categorias</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/users/">
                      <NavDropdown.Item>Usuarios</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orders/">
                      <NavDropdown.Item>Ordenes</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>
                    {/* <span className="cart-counter">
                      {cartItems == undefined ? 0 : cartItems.length}
                    </span> */}
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <Link to="/login/" className="text-primary">
                <i className="fas fa-user"></i> Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
