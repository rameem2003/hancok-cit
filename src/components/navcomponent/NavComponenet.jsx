import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo.png";
import { FaGlobe, FaMagnifyingGlass } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const NavComponenet = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Tournament</Nav.Link>
            <Nav.Link href="#action2">Store</Nav.Link>
            <Nav.Link href="#action2">Team</Nav.Link>
            <Nav.Link href="#action2">FAQ</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
          </Nav>

          <div className="nav-right">
            <FaGlobe size={25} />
            <span>
              <TbLogout size={25} /> Sign in
            </span>
            <FaMagnifyingGlass size={25} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponenet;
