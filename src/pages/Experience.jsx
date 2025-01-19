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

const ExperienceSection = styled.section`
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

const CompanyGroup = styled.div`
  margin-bottom: 3rem;
  background: rgba(147, 51, 234, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(147, 51, 234, 0.1);
`;

const CompanyHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(147, 51, 234, 0.2);
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #9333ea;
  }
`;

const CompanyLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    color: #9333ea;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(147, 51, 234, 0.15);
    box-shadow: 0 4px 20px rgba(147, 51, 234, 0.2);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const JobTitleLink = styled.a`
  text-decoration: none;
  color: #9333ea;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`;

const Period = styled.p`
  color: rgba(147, 51, 234, 0.8);
  margin-bottom: 1.5rem;
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DescriptionItem = styled.li`
  color: rgba(147, 51, 234, 0.8);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: start;
  
  &:before {
    content: "▹";
    color: #9333ea;
    margin-right: 10px;
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Product Consultant",
      company: "SurveySparrow",
      period: "May 2023 - Present",
      years: "2 years",
      description: [
        "Provided strategic guidance and solutions to improve product performance and user experience",
        "Led technical support operations and managed a team of support engineers",
        "Developed and maintained comprehensive product documentation and knowledge base",
        "Conducted product training sessions for clients and internal teams",
        "Implemented process improvements that increased team efficiency by 30%",
        "Managed complex technical implementations and integrations for enterprise clients",
        "Achieved and maintained a customer satisfaction rating of 98%"
      ],
      companyLink: "https://www.linkedin.com/company/surveysparrow"
    },
    {
      title: "Customer Support Specialist",
      company: "SurveySparrow",
      period: "Nov 2021 - Apr 2022",
      years: "6 months",
      description: [
        "Provided technical support and resolved customer inquiries efficiently",
        "Managed and prioritized support tickets to meet SLA requirements",
        "Achieved consistently high customer satisfaction ratings above 95%",
        "Collaborated with team members to improve support processes and documentation"
      ],
      companyLink: "https://www.linkedin.com/company/surveysparrow"
    },
    {
      title: "Senior Customer Support Executive",
      company: "Sitel Group",
      period: "Apr 2020 - Oct 2021",
      years: "1.7 years",
      description: [
        "Collaborated with international clients from US and UK to gather requirements and resolve technical issues",
        "Provided technical support to clients from US and UK",
        "Provided timely resolution of production issues and implemented bug fixes",
        "Participated in daily scrum meetings and sprint planning with distributed teams",
        "Documented technical specifications and maintained up-to-date system documentation"
      ],
      companyLink: "https://www.linkedin.com/company/sitelgroup/"
    },
    {
      title: "Customer Support Executive",
      company: "Sitel Group",
      period: "Apr 2018 - Mar 2020",
      years: "2 years",
      description: [
        "Provided technical support to clients from US and UK",
        "Achieved consistently high customer satisfaction ratings above 95%",
        "Collaborated with team members to improve support processes and documentation"
      ],
      companyLink: "https://www.linkedin.com/company/sitelgroup/"
    },
    {
      title: "Customer Support Representative",
      company: "Guires Solution Pvt Ltd.",
      period: "Jan 2017 - Jul 2017",
      years: "7 months",
      description: [
        "Provided technical support to clients from US and UK",
        "Worked in a team of 10 members to provide support to clients",
        "Managed customer inquiries and resolved technical issues efficiently",
      ],
      companyLink: "https://www.linkedin.com/company/guires/"
    }
  ];

  const groupExperiencesByCompany = () => {
    const groups = {};
    experiences.forEach(exp => {
      if (!groups[exp.company]) {
        groups[exp.company] = [];
      }
      groups[exp.company].push(exp);
    });
    return groups;
  };

  const renderExperienceCards = () => {
    const groupedExperiences = groupExperiencesByCompany();

    return Object.entries(groupedExperiences).map(([company, exps]) => (
      <CompanyGroup key={company}>
        <CompanyHeader>
          <CompanyLink
            href={exps[0].companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CompanyName onClick={() => window.open(exps[0].companyLink, "_blank")}>
              {company}
            </CompanyName>
          </CompanyLink>
        </CompanyHeader>

        {exps.map((exp, index) => (
          <ExperienceCard key={index}>
            <JobTitleLink href={exp.companyLink} target="_blank" rel="noopener noreferrer">
              <JobTitle>
                {exp.title}
              </JobTitle>
            </JobTitleLink>
            <Period>{exp.period}</Period>
            <DescriptionList>
              {exp.description.map((item, idx) => (
                <DescriptionItem key={idx}>
                  {item}
                </DescriptionItem>
              ))}
            </DescriptionList>
          </ExperienceCard>
        ))}
      </CompanyGroup>
    ));
  };

  return (
    <ExperienceSection>
      <Content>
        <Title>Work Experiences</Title>
        {renderExperienceCards()}
      </Content>
    </ExperienceSection>
  );
};

export default Experience;
