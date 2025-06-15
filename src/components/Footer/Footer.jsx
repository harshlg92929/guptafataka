import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={12} sm={12} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Gupta Fataka Bhandar</h1>
            </div>
            <p>
              Welcome to Gupta Fataka Bhandar – where every celebration begins
              with a spark! For generations, we’ve been lighting up festivals,
              weddings, and special moments with the joy and excitement that
              only fireworks can bring.
            </p>
          </Col>
          <Col md={12} sm={12} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                
                </li>
              <li>Phone: +91 9028677576</li>
              <li>Phone: +91 8208234064</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
