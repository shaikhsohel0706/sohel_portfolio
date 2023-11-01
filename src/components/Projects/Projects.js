import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import medicalImg from '../../Assets/paramedical.jpg';
import bg from '../../Assets/bg.jpg';
import ngo from '../../Assets/ngo-registration.jpg.jpg';

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
              imgPath={medicalImg}
              isBlog={false}
              title="Swarajya para medical college"
              description="Swarajya para medical college, it is a college web site that help everyone let know all information about the college also have admin login accsess and student can download pdfs from the web site "
              ghLink="https://github.com/Junaidkhan5423/swarajya"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

           

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ED jobster"
              description="It is a job hiring Plateform that helps HR to find out right candidate for the job from the colleges"
            
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bg}
              isBlog={false}
              title="Skyline Construction pvt ltd"
              description="It is a Constuction company's web site wich provides information about company such as strenght, Assets,Manpower and the Projects that have completed by the company and provides more information "
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngo}
              isBlog={false}
              title="NGO App"
              description="It is a NGO app wich help needy persons, who are in truble and the donator can find easy way to charity and also it provides all the information about the web site  "
              // ghLink="https://github.com/laique7864/ojas-ngo"
              demoLink="https://ojaspbn.in"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
