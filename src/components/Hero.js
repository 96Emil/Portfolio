import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Container className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="Justify-content-center py-5">
          <Col md={6} sm={22}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subtitle && (
              <h3 className="display-4 font-weight-light">{props.subtitle}</h3>
            )}
            {props.text && (
              <h4 className="lead font-weight-light">{props.text}</h4>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hero;
