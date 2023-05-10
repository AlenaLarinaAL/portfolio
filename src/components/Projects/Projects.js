import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webstudio from "../../Assets/Projects/webstudio.png";
import barbershop from "../../Assets/Projects/barbershop.png";
import icecream from "../../Assets/Projects/icecream.png";
import bookshop from "../../Assets/Projects/bookshop.png";
import imgsearch from "../../Assets/Projects/imgsearch.png";
import britlex from "../../Assets/Projects/britlex.png";


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
              imgPath={webstudio}
              isBlog={false}
              title="Web Studio"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/AlenaLarinaAL/goit-markup-hw-08"
              demoLink="https://alenalarinaal.github.io/goit-markup-hw-08/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barbershop}
              isBlog={false}
              title="BarberShop"
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/AlenaLarinaAL/barbershop"
              demoLink="https://alenalarinaal.github.io/barbershop/"
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icecream}
              isBlog={false}
              title="IceCream"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/AlenaLarinaAL/ice-cream"
              demoLink="https://oleksandrpm.github.io/ice-cream/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshop}
              isBlog={false}
              title="BookShop Application"
              // description="Reading books is very popular all over the world, but it is not always possible to carry a printed copy with you. Online bookstore is the application which written in the Java Script programming language is solution to this problem."
              ghLink="https://github.com/AlenaLarinaAL/team-proj-js-book-app"
              demoLink="https://yevhenii2022.github.io/team-proj-js-book-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgsearch}
              isBlog={false}
              title="Images Search App"
              // description=" Using Java Scipt language processing to track the input string and search for images that come from the backend to any user's imagination. This application, written in Java script, is a mini analogue of the modern and world-famous Pixabay. Code and markdown editor build with HTML5, CSS and JavaScript."
              ghLink="https://github.com/AlenaLarinaAL/goit-js-hw-11"
              demoLink="https://alenalarinaal.github.io/goit-js-hw-11/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={britlex}
              isBlog={false}
              title="Britlex Language School"
              // description="This site was created for Britlex English Language School. Online code and markdown editor build with HTML5, CSS, SASS and JavaScript. The successful operation of the website resulted in more than 60.1% of visits and positive reviews and feedback on the purchase of courses."
              ghLink="https://github.com/AlenaLarinaAL/Briltlex-parcel-project"
              demoLink="https://alenalarinaal.github.io/Briltlex-parcel-project/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
