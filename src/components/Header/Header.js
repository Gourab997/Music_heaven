import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className='topbanner'>
        <div>
          <Navbar className='topbanner'>
            <Container>
              <Navbar.Brand
                className='fw-bold'
                style={{ color: "#B1EF83", fontSize: "25px" }}
                to='/'
              >
                {" "}
                <span
                  style={{
                    color: "#F9F871",
                  }}
                >
                  {" "}
                  <i class='fas fa-music'></i>{" "}
                </span>{" "}
                Haven
              </Navbar.Brand>
              <Nav className='me-auto'>
                <NavLink
                  className='nav fw-bold'
                  activeStyle={{ color: "#9B4600" }}
                  to='/home'
                >
                  Home
                </NavLink>
                <NavLink
                  className='nav fw-bold'
                  activeStyle={{ color: "#9B4600" }}
                  to='/about'
                >
                  About us
                </NavLink>
                <NavLink
                  className='nav fw-bold'
                  activeStyle={{ color: "#9B4600" }}
                  to='/service'
                >
                  {" "}
                  Services
                </NavLink>
                <NavLink
                  className='nav fw-bold'
                  activeStyle={{ color: "#9B4600" }}
                  to='/review'
                >
                  Review
                </NavLink>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
