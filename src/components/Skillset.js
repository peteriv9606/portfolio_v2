import React from "react";
import { Container } from "react-bootstrap";
import { skillsetData } from "./data/skillsetData";
import Skill from "./Skill";

function Skillset() {
  return (
    <section id="skillset" className="text-secondary py-3">
      <Container fluid>
        <div id="sectionTitle" className="text-center font-italic">
          Skillset
        </div>
        <hr />
        <div id="header" className="font-italic col-12 text-center py-4">
          Some are already here, more are waiting to be added
        </div>
      </Container>
      <Container fluid className="flex-wrap text-center mx-auto py-5">
        {skillsetData.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </Container>
    </section>
  );
}

export default Skillset;
