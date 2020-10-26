import styled from "styled-components";
import profile from "./img/profile.jpeg";
export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://1.bp.blogspot.com/-5ZaOdrnFUVE/WGYVfiBUIFI/AAAAAAAALzY/Lx3VgSSvniwlmgKuRiG85CxbbwfbDUPqwCLcB/s1600/Coding%2BWallpapers%2B4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.88;
  overflow-x: hidden;
`;
export const Bar = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  height: 50vh;
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffff;
  font-size: 4em;
  font-family: "Roboto", sans-serif;
  text-shadow: 1px 5px 10px #455;
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 2em;
  }
`;
export const SubTitle = styled.h2`
  margin: 0;
  color: #ffff;
  text-shadow: 1px 3px 5px #455;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 1em;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
  width: 0.1;
  height: fit-content;
  background-color: #ffff;
  padding: 20px 0;
  @media screen and (max-width: 540px) {
    flex-flow: column row;
  }
`;

export const Foto = styled.div`
  border-radius: 100px;
  background-color: #cccc;
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  margin: 0 30px;
  height: 200px;
  @media screen and (max-width: 540px) {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
`;

export const DescriptionTitle = styled.h3`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
`;

export const DescriptionContainer = styled.div`
  margin: 0 35px;
  width: 0.35;
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
export const Topics = styled.h3`
  font-size: 30px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 15px;
  width: fit-content;
  text-align: center;
  text-align: justify;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const TopicContainer = styled.div`
  margin-top: 10px;
`;

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 540px) {
    margin: 0 auto;
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;
