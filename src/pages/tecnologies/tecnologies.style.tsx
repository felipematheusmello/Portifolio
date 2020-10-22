import styled from "styled-components";
import { Foto, Box } from "../profile/profile.style";
import skills from "./img/skills.jpg";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNodeDotJs,
} from "react-icons/si";
import { BsHeartFill, BsHeartHalf, BsHeart } from "react-icons/bs";

export const SkillsPhoto = styled(Foto)`
  background-image: url(${skills});
`;

export const LanguagesTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #000;
  margin: 0 5px;
  letter-spacing: 2px;
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
export const Javascript = styled(SiJavascript)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #ffe20a;
`;

export const Html = styled(SiHtml5)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #f06529;
`;

export const Css = styled(SiCss3)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #00a0dc;
`;

export const ReactIcon = styled(SiReact)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #61dbfb;
`;

export const TypescriptIcon = styled(SiTypescript)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #007acc;
`;

export const NodeJs = styled(SiNodeDotJs)`
  font-size: 25px;
  margin: 0 10px;
  margin-top: 5px;
  color: #68a063;
`;
export const BoxSkills = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const FullHeart = styled(BsHeartFill)`
  color: #e44e58;
  margin: 0 2px;
  margin-top: 15px;
`;

export const HalfHeart = styled(BsHeartHalf)`
  color: #e44e58;
  margin: 0 2px;
  margin-top: 15px;
`;

export const EmptyHeart = styled(BsHeart)`
  color: #e44e58;
  margin: 0 2px;
  margin-top: 15px;
`;
export const LanguagesContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin: 10px;
`;

export const Mobile = styled(LanguagesTitle)`
  display: none;
  @media screen and (max-width: 540px) {
    display: inline-block;
    font-family: "Roboto", sans-serif;
    color: #000;
    margin: 0 5px;
    letter-spacing: 2px;
  }
`;
