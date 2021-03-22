import React, { useState } from "react";

import { Container, Button, Row, Modal } from "react-bootstrap";

import { projectsData } from "./data/projectsData";
import Project from "./Project";

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="projects" className="text-secondary py-3">
      <Container fluid>
        <div id="sectionTitle" className="text-center font-italic">
          Projects
        </div>
        <hr />
        <div id="header" className="font-italic col-12 text-center py-4">
          "Slow progress is better than no progress"
        </div>
        <Container fluid>
          <Container>
            {projectsData.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
          </Container>
        </Container>
        {/*  <Row className="d-flex justify-content-center p-3">
          <Button className="btn btn-info" onClick={handleShow}>
            View All Projects
          </Button>
        </Row> */}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>:(</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorry, no more projects to show... For now</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;
