import React from "react";
import { Navbar, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Col className="col-6">
        <h1>The Generics</h1>
      </Col>
      <Col className="col-2"></Col>
      <Col className="col-4">
        <a href="/youtube">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
            alt=""
            style={{ width: "30px", marginLeft: "50px" }}
          />
        </a>
        <a href="/spotify">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
            alt=""
            style={{ width: "30px", marginLeft: "50px" }}
          />
        </a>
        <a href="/facebook">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
            alt=""
            style={{ width: "30px", marginLeft: "50px" }}
          />
        </a>
      </Col>
    </Navbar>
    // <Container fluid className="d-flex justify-content-center bg-info text-white p-2">
    //       <Row>
    //         <Col className="text-start">
    //           <h1>The Generics</h1>
    //         </Col>
    //         <Col className='d-flex text-end'>
    //           <p className='p-3'>Youtube</p>
    //           <p className='p-3'>spotify</p>
    //           <p className='p-3'>facebook</p>
    //         </Col>
    //       </Row>
    //     </Container>
  );
};

export default Footer;
