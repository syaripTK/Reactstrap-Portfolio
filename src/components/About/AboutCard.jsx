import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad S Syarip </span>
            from <span className="purple"> Indonesia.</span>
            <br /> I am a passionate Web Developer with a strong interest in
            backend engineering and full-stack development.
            <br />
            I enjoy building structured systems, solving real-world problems
            through code, and continuously improving my technical and analytical
            skills.
            <br />
            <br />
            Beyond coding, I value collaboration, learning new technologies, and
            contributing meaningfully to projects and the people around me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />
              Learning Japanese Language
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Most good programmers do programming not because they expect to get
            paid or get adulation by the public, but because it is fun to
            program."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
