import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function Contact() {
  return (
    <>
      <Container fluid style={{ height: "250px", padding: "50px" }}>
        <h2 className="text-center">Get In Touch</h2>
        <Col>
          <hr />
        </Col>
        <Row>
            <Col>
            <h3>Subscribe to our news letter</h3>
            </Col>
            <Col>
            <h3>Social Media Icons</h3>
            </Col>

        </Row>
      </Container>
      <footer
        style={{
          height: "80px",
          backgroundColor: "hsl(0, 0%, 25%)",
          padding: "20px",
        }}
      >
        <h4 className="text-center">@reubenwanjala</h4>
      </footer>
    </>
  );
}
