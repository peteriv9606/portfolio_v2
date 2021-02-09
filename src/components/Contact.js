import React, { useState, useRef } from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { socialData } from "./data/socialData";
import { errTypes } from "./data/errTypes";

function Contact() {
  const isEmail = require("sane-email-validation");
  var err;
  const el = useRef(null);
  init("user_z3vb45f04nlIyF48p7OzJ"); //for Email sending
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const [errMsg, setErrMsg] = useState("errMsg");

  const handleType = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.email && data.message) {
      //check for empty fields
      //console.log("No empty fields", data);
      //check if data.email is valid email address
      if (isEmail(data.email)) {
        //it is - send email
        performSubmit(e);
        setShowModal(true);
        setData({ name: "", email: "", message: "" });
      } else {
        //it is not valid email - display error message
        //console.log("wrong email");
        err = errTypes.filter((msg) => msg.errType === "WrongEmail");
        setErrMsg(err[0].errMsg);
        el.current.style.visibility = "visible";
        setTimeout(() => (el.current.style.visibility = "hidden"), 2000);
      }
    } else {
      //console.log("Has empty fields");
      err = errTypes.filter((msg) => msg.errType === "EmptyFields");
      setErrMsg(err[0].errMsg);
      el.current.style.visibility = "visible";
      setTimeout(() => (el.current.style.visibility = "hidden"), 2000);
    }
  };

  function performSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_wxk3frh",
      "template_xggtre5",
      e.target,
      "user_z3vb45f04nlIyF48p7OzJ"
    );
    e.target.reset();
  }
  return (
    <section id="contact" className="text-secondary py-3">
      <Container fluid>
        <div id="sectionTitle" className="text-center font-italic">
          Contact
        </div>
        <hr />
        <div id="header" className="font-italic col-12 text-center py-4">
          Always feels good to get in touch
        </div>

        <Container className="bg-light shadow-lg rounded my-5 p-5 d-flex flex-wrap">
          <Container
            fluid
            className="col-12 col-lg-6  py-5 px-5 "
            id="contactAndAlt"
          >
            <Row className="d-block text-center text-secondary">
              <div id="subHeader">Drop me an email</div>
            </Row>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col className="col-12 col-lg-6 my-2">
                  <Form.Control
                    type="input"
                    name="name"
                    value={data.name}
                    placeholder="Full Name"
                    onChange={handleType}
                  />
                </Col>
                <Col className="col-12 col-lg-6 my-2">
                  <Form.Control
                    type="input"
                    name="email"
                    value={data.email}
                    placeholder="Email Address"
                    onChange={handleType}
                  />
                </Col>
                <Col className="col-12 my-2">
                  <Form.Control
                    type="input"
                    name="message"
                    value={data.message}
                    as="textarea"
                    rows={3}
                    placeholder="Message for me"
                    onChange={handleType}
                  />
                </Col>
                <Col className="col-12 d-block text-center">
                  <p id="errMsg" className="m-auto p-1 d-block" ref={el}>
                    {errMsg}
                  </p>
                  <Button
                    className="btn btn-success w-100"
                    type="submit"
                    onClick={() => handleShow}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
          <Container
            id="contactAndAlt"
            fluid
            className="col-12 col-lg-6  py-5 px-5"
          >
            <Container fluid className="col-12">
              <Row className="d-block text-center text-secondary">
                <div id="subHeader">Or use the alternatives</div>
              </Row>
              <Container
                fluid
                className="d-flex flex-wrap justify-content-around"
              >
                {socialData.map((item) => {
                  return (
                    <a
                      href={item.link}
                      key={item.id}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={item.imgLink}
                        style={{ width: "40px", cursor: "pointer" }}
                        className="m-2 rounded"
                      />
                    </a>
                  );
                })}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for the email, I will get back to you as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thanks
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Contact;
