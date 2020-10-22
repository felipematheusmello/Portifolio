import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
margin-left:30px;
text-decoration:none;
color: ${props => props.color};
font-size:17px;
font-family: 'Roboto', sans-serif;
`
export const Container = styled.div`
display:flex;
flex-flow:wrap row;
align-items:center;
justify-content:right;
padding-bottom:10px;
border-bottom: solid 1px #ddd; 
width:100%;
height:40px;
`