import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding-left: 40px;
  padding-right: 40px;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  :hover {
    background-color: ${(props) => props.hover};
  }
  @media screen and (max-width: 540px) {
    padding: 0;
    margin: 0 15px;
    font-size: 12px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: solid 1px #ddd;
  width: 100vw;
  height: 40px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffff;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  @media screen and (max-width: 540px) {
    font-size: 15px;
    margin-left: 2px;
  }
`;
