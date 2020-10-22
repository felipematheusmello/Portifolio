import * as React from "react";
import Header from "../../components/header";
import {
  Body,
  Bar,
  Title,
  SubTitle,
  Box,
  Foto,
  DescriptionTitle,
  DescriptionContainer,
  Topics,
  Description,
} from "./profile.style";
const Profile = () => {
  return (
    <Body>
      <Header />
      <Bar>
        <Title>Eu sou Felipe Matheus</Title>
        <SubTitle>Desenvolvedor Web Front-End</SubTitle>
      </Bar>
      <Box>
        <DescriptionContainer>
          <Topics>O que eu faço?</Topics>
          <Description>
            Gosto de aprender novas coisas e sempre me atualizar, sou estudante
            e tenho sonho de me tornar um ótimo programador fullstack para
            contribuir da melhor forma para o mercado de tecnologia
          </Description>
        </DescriptionContainer>
        <DescriptionContainer>
          <Foto />
          <DescriptionTitle>Nome</DescriptionTitle>
          Felipe Matheus Mello de Morais
          <DescriptionTitle>E-mail</DescriptionTitle>
          felipematheusmellodemorais@gmail.com
          <DescriptionTitle>Data de Nascimento</DescriptionTitle>
          Dia 07 de junho de 2000
        </DescriptionContainer>
      </Box>
    </Body>
  );
};
export default Profile;
