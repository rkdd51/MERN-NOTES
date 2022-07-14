import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          bottom: 0,
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-3">
              All rights reserved to Rahul Dubey
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
