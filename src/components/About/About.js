import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/lightspicture.jpg"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Dario Tzeng</strong>. It's pronounced like Mario but with a D. I am Taiwanese but have
            been living in the San Francisco Bay Area for my entire life. Currently, I am a third year Computer Engineering major
            at the University of California, San Diego planning to graduate December 2024. I enjoy playing basketball, tennis, 
            video games, and dancing. I am also a big foodie, especially for boba, and would like to travel the world in the future.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Coming from a family of engineers, early exposure to different technology is what sparked my interest in software development.
            I've spent high school and college building a strong foundation in data structures, algorithms, and computing principles while 
            also learning various languages and tools to drive my success. Most recently, I interned at Zoom as a full-stack engineering 
            intern, where I sharpened up my software abilities and gained professional skills needed to work in the engineering industry. 
            It was an amazing experience, and I learned a lot about the Agile development process as well as common design principles.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Right now, I am looking for a motivated team to work with this upcoming summer. I am particularly interested in topics like 
              computer vision, game design, app development, and machine learning, but I am always eager to learn new things! If I seem like
              a good fit, please find my contact details below.
              <div className="tagline2">
                Technologies that I have experience with:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
