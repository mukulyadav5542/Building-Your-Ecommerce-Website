import React from 'react';
import { Button, Row, Col, Container } from "react-bootstrap";

const HomeContent = () => {
  return (
    <Container
        fluid
        className="d-flex align-items-center justify-content-center bg-secondary text-dark p-5"
      >
        <Row>
          <Col className="text-center font-weight-bold">
            <h1>THE GENERICS</h1>
            {true && <>
              <Button variant="outline-info">Get our Latest Album</Button>
              <div className="container text-center p-3">
                <img
                  src="../Images/play-button-icon-png-17.png"
                  alt="icon"
                  style={{ width: "40px" }}
                />
              </div>
            </>}
          </Col>
        </Row>
      </Container>
  )
}

export default HomeContent