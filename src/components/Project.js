import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

const PicCol = (props) => {
  return (
    <>
      <Col className="col-12 col-md-6 ">
        <Image
          responsive="true"
          src={props.imgLink}
          alt={props.id}
          className=" rounded-lg shadow d-block mx-auto my-3"
          style={{ width: "inherit" }}
          id="projectImg"
        />
      </Col>
    </>
  );
};
const DataCol = (props) => {
  return (
    <>
      <Col className="col-12 col-md-6 align-self-center">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <div id="subHeader">
              <b>{props.header}</b>
            </div>
          </Row>
          <Row>
            <div className="font-italic text-justify" id="description">
              {props.description}
            </div>
          </Row>
          <Row className="d-flex justify-content-around p-3">
            {props.githubLink && (
              <Button href={props.githubLink} className="btn btn-primary">
                Github
              </Button>
            )}
            {props.liveLink && (
              <Button href={props.liveLink} className="btn btn-success">
                View Live
              </Button>
            )}
          </Row>
        </Container>
      </Col>
    </>
  );
};

export const Project = ({
  id,
  imgLink,
  header,
  description,
  githubLink,
  liveLink,
}) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  return (
    <>
      {size > 992 ? (
        <>
          {id % 2 === 0 ? (
            <Row className="m-3 ">
              <PicCol id={id} imgLink={imgLink} />
              <DataCol
                header={header}
                description={description}
                githubLink={githubLink}
                liveLink={liveLink}
              />
            </Row>
          ) : (
            <Row className="m-3 ">
              <DataCol
                header={header}
                description={description}
                githubLink={githubLink}
                liveLink={liveLink}
              />
              <PicCol id={id} imgLink={imgLink} />
            </Row>
          )}
        </>
      ) : (
        <>
          <Row className="my-5">
            <PicCol id={id} imgLink={imgLink} />
            <DataCol
              header={header}
              description={description}
              githubLink={githubLink}
              liveLink={liveLink}
            />
          </Row>
        </>
      )}
    </>
  );
};

export default Project;
