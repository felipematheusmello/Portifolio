import * as React from "react";
import styled from "styled-components";
import { Box } from "../profile/profile.style";

export const ProjectImages = styled.div`
  border-radius: 5px;
  background-image: url(${(props) => props.project});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  :hover {
    cursor: pointer;
  }
`;

export const ProjectTitle = styled.h3`
  color: black;
  font-size: 25px;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
`;
export const ProjectContainer = styled.div`
  margin: 10px 20px;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
`;
