import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logo1 from "../../assets/img/logo1.png";
import "./styles.css"
export default function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      bg="secondary"
      variant="secondary"
      expand="lg"
    >
        <Container>
        <Navbar.Brand href="/">
          <img height="40" src={logo1}/>
          
        </Navbar.Brand>

        </Container>
    </Navbar>
  );
}
