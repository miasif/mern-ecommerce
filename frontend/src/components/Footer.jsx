import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3 ">
            <p>MERN Ecom &copy; {currentYear} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
