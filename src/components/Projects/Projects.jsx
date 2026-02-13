import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mines from "../../Assets/Projects/mines.png";
import storage from "../../Assets/Projects/storage.png";
import api from "../../Assets/Projects/api.png";
import ebooks from "../../Assets/Projects/ebooks.png";
import telegram from "../../Assets/Projects/telegram.png";
import alquran from "../../Assets/Projects/alquran.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebooks}
              isBlog={false}
              title="Ebooks"
              description="A full-stack web application for managing a digital library through complete CRUD operations. Built with PHP and MySQL for robust backend and relational data management, and powered by React.js to deliver a responsive and dynamic user interface."
              ghLink="https://github.com/syaripTK/buku-elektronik"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mines}
              isBlog={false}
              title="Mines Game"
              description="An interactive browser-based Mines game built with React and Framer Motion, showcasing dynamic state management, game logic implementation, and smooth animated user interactions."
              ghLink="https://github.com/syaripTK/Mines-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Restful API Cuti Karyawan"
              description="A backend REST API for managing employee leave and approval workflows, built with Node.js, Express, and Sequelize. Implements authentication, relational database modeling, business logic validation, and transactional consistency."
              ghLink="https://github.com/syaripTK/Ujian-Backend-2026"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alquran}
              isBlog={false}
              title=" Al-Quran Web"
              description="A React-based web application that integrates public Quran APIs to display surahs and verses dynamically, showcasing API consumption, state management, and responsive interface development."
              ghLink="https://github.com/syaripTK/fetch-quran"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telegram}
              isBlog={false}
              title="Ordinary Telegram Bot"
              description="A Telegram bot developed with Node.js and Express, utilizing webhook integration to process commands and automate real-time interactions. Showcases backend logic handling and API-based communication"
              ghLink="https://github.com/syaripTK/-januari2025/tree/main/bot-telegraf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storage}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A student data management web app utilizing Local Storage for client-side data persistence and a Bootstrap-based UI template from ThemeWagon, showcasing CRUD functionality and responsive interface design."
              ghLink="https://github.com/syaripTK/project-templating"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
