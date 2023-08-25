import { Tab } from "react-bootstrap";
import React, { useState } from "react";

import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";

import "../Styles/Project.css"

export default function Projects() {
    const [activeSection, setActiveSection] = useState("first");
    
    const projectsWeb = [
        {
          title: "Business Startup",
          description: "Sample Design",
          imgUrl: projImg1,
          link: "https://64e9245717d1f35164f0df28--cosmic-marshmallow-c772c4.netlify.app/"
        },
        {
          title: "Business Startup",
          description: "Sample Design",
          imgUrl: projImg2,
          link: "https://64e923ed17d1f350dbf0e028--lovely-biscotti-3a7a96.netlify.app/"
        },
        {
            title: "Web Portrait",
            description: "Design & Development",
            imgUrl: projImg6,
            link: "https://bejewelled-sundae-ce4ae6.netlify.app/"
          },
        {
          title: "Online MCQ Quiz",
          description: "Design & Development",
          imgUrl: projImg4,
          link: "https://comfy-quokka-1f1d18.netlify.app/"
        },
        {
          title: "Random Choice Generator",
          description: "Design & Development",
          imgUrl: projImg5,
          link: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/"
        },
        {
            title: "Online RPG game",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://inspiring-cranachan-27b2ba.netlify.app/"
          },
      ];

      const projectsOOP = [
        {
          title: "Space Shooter Game",
          description: "Sample Design",
          imgUrl: projImg7,
          link:"https://github.com/haaaarsh4/Space-shooter-Multiplayer"
        },
        {
          title: "CLI Chess",
          description: "Sample Design",
          imgUrl: projImg9,
          link: "https://github.com/haaaarsh4/CHESS-CLI/tree/main"
        },
        {
          title: "QR code Generator",
          description: "Design & Development",
          imgUrl: projImg4,
          link: "https://github.com/haaaarsh4/QR-code-Generator/tree/main"
        }
      ];

      const projectsML = [
        {
          title: "Email Spam Classifier",
          description: "Design & Development",
          imgUrl: projImg10,
          link: "https://github.com/haaaarsh4/Email-Spam-Classifier"
        }
      ];
          
      return (
        <div className="project" id="projects">
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>
                    I've embarked on diverse projects spanning web development, Object-Oriented Programming, and Machine Learning. From crafting engaging web solutions and strategic CLI applications to developing an Email Spam Classifier, my projects underscore my proficiency in design, development, and innovative problem-solving.
                    </p>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <ul class="nav-pills">
                            <li className="nav-items">
                                <a 
                                    eventKey="first"
                                    className={activeSection === 'first' ? 'active navbar-links' : 'navbar-links'}
                                    onClick={() => setActiveSection('first')}
                                >
                                    Web Dev
                                </a>
                            </li>
                            <li className="nav-items">
                                <a
                                    eventKey="second"
                                    className={activeSection === 'second' ? 'active navbar-links' : 'navbar-links'}
                                    onClick={() => setActiveSection('second')}
                                >
                                    OOP
                                </a>
                            </li>
                            <li className="nav-items">
                                <a
                                    eventKey="third"
                                    className={activeSection === 'third' ? 'active navbar-links' : 'navbar-links'}
                                    onClick={() => setActiveSection('third')}
                                >
                                    ML
                                </a>
                            </li>

                        </ul>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                            {activeSection === 'first' && (
                                <div className="project-cards-container">
                                    {projectsWeb.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </div>
                            )}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            {activeSection === 'second' && (
                                <div className="project-cards-container">
                                    {projectsOOP.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                ))}
                                </div>                            
                            )}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            {activeSection === 'third' && (
                                <div className="project-cards-container">
                                {projectsML.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                            )}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div> }
            </TrackVisibility>
        </div> 
      )
}