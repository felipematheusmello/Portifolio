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
  TopicContainer,
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
          <TopicContainer>
            <Topics>Objetivo</Topics>
            <Description>
              Tenho 6 mêses de experiência com desenvolvimento Front-End, fiz
              diversos projetos na Kenzie Academy (escola de programação que
              estudo), tais projetos que desenvolveram minha comunicação e minha
              visão de regra de negócios. Meu objetivo profissional é melhorar
              minha habilidade de tomada de decisões e melhorar sempre minha
              habilidade técnica, para que assim eu possa entregar 100% do meu
              potêncial em todas as equipes que eu farei parte.
            </Description>
          </TopicContainer>
          <TopicContainer>
            <Topics>O que eu faço?</Topics>
            <Description>
              Gosto de aprender novas coisas e sempre me atualizar, sou
              estudante de programação full stack web e tenho sonho de me tornar
              um ótimo programador fullstack para contribuir da melhor forma
              para o mercado de tecnologia.
            </Description>
          </TopicContainer>
        </DescriptionContainer>
        <DescriptionContainer>
          <Foto />
          <DescriptionTitle>Nome</DescriptionTitle>
          <Description>Felipe Matheus Mello de Morais</Description>
          <DescriptionTitle>E-mail</DescriptionTitle>
          <Description>felipematheusmellodemorais@gmail.com</Description>
          <DescriptionTitle>Data de Nascimento</DescriptionTitle>
          <Description>Dia 07 de junho de 2000</Description>
        </DescriptionContainer>
      </Box>
    </Body>
  );
};
export default Profile;
