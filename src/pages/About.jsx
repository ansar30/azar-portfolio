import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #2d1b3c 0%, #1a1022 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(
    270deg,
    #9333ea,
    #ffffff,
    #6b21a8,
    #9333ea
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 6s ease infinite;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #a0a0a0;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(147, 51, 234, 0.15);
    box-shadow: 0 4px 20px rgba(147, 51, 234, 0.2);
  }

  h3 {
    color: #9333ea;
    margin-bottom: 1rem;
  }

  p {
    color: #a0a0a0;
  }
`;

const About = () => {
  const skills = [
    {
      title: "Technical Support",
      description: "Expertise in troubleshooting and resolving complex technical challenges"
    },
    {
      title: "Project Management",
      description: "Proficient in managing projects and ensuring timely delivery"
    },
    {
      title: "Product Consulting",
      description: "Expertise in providing strategic guidance and solutions to improve product performance and user experience"
    },
  ];

  return (
    <AboutSection>
      <Content>
        <Title>About Me</Title>
        <Description>
          I'm a passionate Technical Support Engineer with a keen eye for detail and a
          dedication to crafting efficient, scalable solutions.
          I have a strong background in troubleshooting and resolving complex technical challenges,
          and I'm dedicated to providing exceptional customer service.
        </Description>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Content>
    </AboutSection>
  );
};

export default About;
