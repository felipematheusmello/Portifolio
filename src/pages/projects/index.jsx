import React from "react";
import { Body, Title, Bar, SubTitle } from "../profile/profile.style";
import {
  ProjectImages,
  ProjectTitle,
  ProjectContainer,
  StyledBox,
} from "./projects.style";
import Header from "../../components/header";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <Body>
      <Header />
      <Bar>
        <Title>Meus Projetos</Title>
        <SubTitle>Desenvolvedor Web Front-End</SubTitle>
      </Bar>
      <StyledBox>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>
          <ProjectContainer>
            <a
              href="https://bookbook-omega.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ProjectTitle>BookBook</ProjectTitle>
              <ProjectImages project="https://static01.nyt.com/images/2019/12/06/books/06critics-list1/06critics-list1-videoSixteenByNineJumbo1600.jpg" />{" "}
            </a>
          </ProjectContainer>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>
          <ProjectContainer>
            <a
              href="https://reciclaton.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ProjectTitle>Reciclaton</ProjectTitle>
              <ProjectImages project="https://image.freepik.com/vetores-gratis/pessoas-que-classificam-o-lixo-em-ilustracao-de-lixeiras_53876-43173.jpg" />{" "}
            </a>
          </ProjectContainer>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>
          <ProjectContainer>
            <a
              href="https://collections.felipe-matheus.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ProjectTitle>Collections</ProjectTitle>
              <ProjectImages project="https://en3yksrguy-flywheel.netdna-ssl.com/wp-content/uploads/05-%C3%96sterl%C3%A5nggatan-17-Branding-Illustration-Business-Cards-Lobby-Design-BPO.jpeg" />{" "}
            </a>
          </ProjectContainer>
        </motion.div>
      </StyledBox>
    </Body>
  );
};

export default Projects;
