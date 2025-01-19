import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #3b0764;
  color: #9333ea;
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  
  a {
    color: #9333ea;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #7e22ce;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/abdulazarudeen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:abdulazarudeen95@gmail.com">Email</a>
        </SocialLinks>
        <p>&copy; {new Date().getFullYear()} Abdul Azarudeen. All Rights Reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
