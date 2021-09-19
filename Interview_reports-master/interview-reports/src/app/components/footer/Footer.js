import React from "react";
import "./Footer.css"
import {Container} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation();
  if(location.pathname === "/login") {
     return <div></div>
  }
  return(
      <footer>
          <Container>
          <p className="styleFooter">BIT 2021 Final project copy Sasa Anđelković, Dimitrije Pavković, Nikola Čolović and Vladan
      Ćuprić </p>
          </Container>
      </footer>
  )
};

export default Footer;


