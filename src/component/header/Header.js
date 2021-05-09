import React from "react";
import "./Header.css";
import logo from "../../assets/images/Union.png";
import { Nav, Navbar, Form, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Products">Products</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#Resources">Resources</Nav.Link>
        </Nav>
        <a className="navbar-brand">
          <img src={logo} />
        </a>
        <Form inline>
          <Button variant="outline-info">Get Started</Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
}
export default Header;
