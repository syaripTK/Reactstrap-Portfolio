import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I began my journey in programming with strong curiosity, and over
              time I developed a deep interest in backend development while
              continuously exploring full-stack technologies.
              <br />
              <br />I primarily work with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Node.js, Express.js, and MongoDB/MySQL.{" "}
                </b>
              </i>
              <br />
              <br />
              My main focus is building structured and scalable
              <i>
                <b className="purple"> RESTful APIs and Backend Systems </b>
              </i>
              with proper authentication, database modeling, and clean
              architecture principles, while also developing full-stack
              applications using the
              <b className="purple"> MERN Stack.</b>
              <br />
              <br />I enjoy transforming ideas into functional digital products
              — starting from designing user interfaces in{" "}
              <b className="purple">Figma</b> to implementing them using
              <i>
                <b className="purple">
                  {" "}
                  React.js and modern JavaScript frameworks
                </b>
              </i>
              &nbsp; and connecting them to robust backend services.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/syaripTK"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/6283164526153"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmad-syangkan-syarip-2283b1381/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ahmadssyarip/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
