import React from "react";
import Header from "../../components/header";
import { Body, Title, Bar, SubTitle } from "../profile/profile.style";
import {
  SkillsPhoto,
  LanguagesTitle,
  Javascript,
  Html,
  BoxSkills,
  FullHeart,
  LanguagesContainer,
  HalfHeart,
  EmptyHeart,
  LanguageContainer,
  Css,
  ReactIcon,
  TypescriptIcon,
  NodeJs,
} from "./tecnologies.style";
const Tecnologies = () => {
  return (
    <Body>
      <Header />
      <Bar>
        <Title>Tecnologias que uso</Title>
        <SubTitle>Desenvolvedor Web Front-End</SubTitle>
      </Bar>
      <BoxSkills>
        <SkillsPhoto />

        <LanguagesContainer>
          <LanguageContainer>
            <LanguagesTitle>
              <Javascript />
              JavaScript
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>

          <LanguageContainer>
            <LanguagesTitle>
              <Html />
              HTML
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>

          <LanguageContainer>
            <LanguagesTitle>
              <Css />
              CSS
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>

          <LanguageContainer>
            <LanguagesTitle>
              <ReactIcon />
              React
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>

          <LanguageContainer>
            <LanguagesTitle>
              <TypescriptIcon />
              TypeScript
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>

          <LanguageContainer>
            <LanguagesTitle>
              <NodeJs />
              Node.js
            </LanguagesTitle>
            <FullHeart />
            <FullHeart />
            <FullHeart />
            <HalfHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
            <EmptyHeart />
          </LanguageContainer>
        </LanguagesContainer>
      </BoxSkills>
    </Body>
  );
};

export default Tecnologies;
