import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <section id="home">
      <div className="shapedBg d-flex align-items-center justify-content-center">
        <Container className="shapedContent bg-light rounded shadow-lg h-50 col-8 p-0 m-0">
          <Container
            fluid
            className="SideTriangleShape h-100 d-flex flex-wrap justify-content-center p-0 m-0"
          >
            <Container className="text-dark text-center align-self-center">
              <h1>Petar Ivanov</h1>
              <h4>Web Developer Enthusiast</h4>
            </Container>
          </Container>
        </Container>
      </div>
      {/* <Container className="col-12 text-center">
        <div id="sectionTitle">
          <span style={{ color: "#FF1493" }}>Hello </span>
          <span style={{ color: "#bfff00" }}>World!</span>
        </div>
      </Container>

      <Container
        className="col-12 text-left py-auto d-flex "
        style={{ height: "calc(100vh - 130px" }}
      >
        <Container fluid id="header" className="my-auto">
          <span style={{ color: "#4FC1FF" }}>
            <span style={{ color: "#569CD6" }}>const</span> name
          </span>
          <span style={{ color: "white" }}> = </span>
          <span style={{ color: "#CE9178" }}>"Petar Ivanov"</span>
          <br></br>
          <span style={{ color: "#4FC1FF" }}>
            <span style={{ color: "#569CD6" }}>let</span> role
          </span>
          <span style={{ color: "white" }}> = </span>
          <span style={{ color: "#CE9178" }}>"Web Developer Enthusiast"</span>
        </Container>
      </Container> */}
    </section>
  );
}

export default Home;
