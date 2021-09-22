import { faClipboardList, faHome, faPlusCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ logOut }) => {
  return (
    <header>
      <Navbar className="navStyle" expand="lg">
        <Container>
          <Navbar.Brand href="/">Interview Reports</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav  className="ms-auto align-items-center">
              <Link to="/" className="btn btn-outline-info mar">
                <FontAwesomeIcon icon={faHome}/>
                Home
              </Link>
              <Link to="/reports" className="btn btn-outline-info mar">
              <FontAwesomeIcon icon={faClipboardList}/> 
                Reports
              </Link>
              <Link to="/createReport" className="btn btn-outline-info mar">
              <FontAwesomeIcon icon={faPlusCircle}/>
                Create Report
              </Link>
              <button onClick={logOut} type="button" className="btn btn-outline-info">Logout<FontAwesomeIcon icon={faSignOutAlt}/></button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;