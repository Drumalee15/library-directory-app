import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-4 bg-dark text-white pt-4 pb-2">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p className="copyright">© 2024 Library Directory Application. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
