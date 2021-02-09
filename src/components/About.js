import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="about" className="text-secondary py-3">
      <Container fluid>
        <div className="text-center font-italic" id="sectionTitle">
          About
        </div>
        <hr />
        <div id="header" className="font-italic col-12 text-center py-4">
          Enough about me, let's talk about.. me
        </div>

        <Container
          className="bg-light shadow-lg rounded my-5 p-5 d-flex flex-wrap"
          id="aboutContainer"
        >
          <Container fluid className="text-dark col-12 col-lg-6 py-2">
            <div id="subHeader" className="text-center">
              Being my own R&amp;D
            </div>
            <div
              id="description"
              className="my-2 px-5 text-secondary font-italic text-justify"
            >
              I am a self-taught web and software developer. I love it when I
              create something out of nothing, and that something is useful for
              those who need it.
            </div>
          </Container>
          <Container fluid className="text-dark col-12 col-lg-6 py-2">
            <div id="subHeader" className="text-center">
              My Drive
            </div>
            <div
              id="description"
              className="my-2 px-5 text-secondary font-italic text-justify"
            >
              I build projects for fun(ctionality!) and self-development. I'm a
              fast learner and I am able to tackle new tasks with great
              positivity and persistence (towards perfection).
            </div>
          </Container>
          <Container fluid>
            <Row>
              <Col className="col-12 col-lg-6 d-flex">
                <Button
                  id="cvBtn"
                  className="btn btn-primary m-2"
                  onClick={handleShow}
                  style={{ width: "inherit" }}
                >
                  Preview my CV
                </Button>
              </Col>
              <Col className="col-12 col-lg-6  d-flex">
                <Button
                  id="cvBtn"
                  className="btn btn-success m-2"
                  onClick={handleShow}
                  style={{ width: "inherit" }}
                >
                  Download my CV
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sorry</Modal.Title>
        </Modal.Header>
        <Modal.Body>This function is unavailable at the moment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default About;
