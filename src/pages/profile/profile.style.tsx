import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://1.bp.blogspot.com/-5ZaOdrnFUVE/WGYVfiBUIFI/AAAAAAAALzY/Lx3VgSSvniwlmgKuRiG85CxbbwfbDUPqwCLcB/s1600/Coding%2BWallpapers%2B4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.88;
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
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #ffff;
  padding: 20px 0;
`;

export const Foto = styled.div`
  border-radius: 100px;
  background-color: #cccc;
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
  width: 40%;
`;
export const Topics = styled.h3`
  font-size: 30px;
  color: black;
  font-weight: lighter;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
