import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #3b0764 0%, #1e0333 100%);
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #9333ea, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

const ProjectCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(147, 51, 234, 0.15);
    box-shadow: 0 4px 20px rgba(147, 51, 234, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  color: #9333ea;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: rgba(147, 51, 234, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: auto;
`;

const TechBadge = styled.span`
  background: rgba(147, 51, 234, 0.1);
  color: #9333ea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProjectLink = styled.a`
  color: #9333ea;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #9333ea;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background: rgba(147, 51, 234, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.2);
  }
`;

const TechnicalExperience = () => {
  const experiences = [
    {
      title: "SurveySparrow Account Management & Technical Leadership",
      description: "Managed $75K client portfolio with 99% SLA compliance. Led business reviews and cross-functional teams, resulting in 15% increase in customer retention and 20% reduction in resolution time. Implemented usability enhancements based on customer feedback, boosting satisfaction by 10%.",
      techStack: ["SurveySparrow", "HubSpot", "Zendesk", "CRM", "KPI Analytics", "CSS"],
      link: "https://www.linkedin.com/company/surveysparrow"
    },
    {
      title: "Technical Support & Process Optimization",
      description: "Achieved 90% first-call resolution rate while managing technical support operations. Streamlined workflows resulting in 15% efficiency improvement. Developed custom surveys and workflows that increased customer engagement by 20%. Maintained detailed CRM records for clear communication.",
      techStack: ["Project Management", "CRM Systems", "User Research", "Workflow Design", "Customer Education", "Technical Documentation"],
      link: "https://www.linkedin.com/company/surveysparrow"
    },
    {
      title: "Enterprise Security Solutions Support",
      description: "Provided expert technical support for AVG and Avast products at Sitel India. Reduced system downtime by 25% through efficient escalation management. Specialized in resolving complex firewall, DNS, and system configuration issues using remote support tools.",
      techStack: ["LogMeIn Rescue", "AVG", "Avast", "Firewall Configuration", "DNS Management", "Remote Support"],
      link: "https://www.linkedin.com/company/avg/"
    }
  ];

  return (
    <ProjectSection>
      <Title>Technical Support Excellence</Title>
      <ProjectGrid>
        {experiences.map((experience, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{experience.title}</ProjectTitle>
            <ProjectDescription>{experience.description}</ProjectDescription>
            <TechStack>
              {experience.techStack.map((tech, techIndex) => (
                <TechBadge key={techIndex}>{tech}</TechBadge>
              ))}
            </TechStack>
            <ProjectLink href={experience.link} target="_blank" rel="noopener noreferrer">
              View Details
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectSection>
  );
};

export default TechnicalExperience;
