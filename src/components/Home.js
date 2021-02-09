import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <section id="home" className="text-light bg-dark py-3">
      <Container className="col-12 text-center">
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
            <span style={{ color: "#569CD6" }}>var</span> role
          </span>
          <span style={{ color: "white" }}> = </span>
          <span style={{ color: "#CE9178" }}>"Web Developer Enthusiast"</span>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
