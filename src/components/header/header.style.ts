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
    flex-flow:nowrap row;
    align-items:center;
    justify-content:space-around;
    padding-bottom:10px;
    border-bottom: solid 1px #ddd; 
    width:100vw;
    height:40px;
`

export const Title = styled.h1` 
    margin:0;
    color:#FFFF;
    font-size:30px;
    font-family: 'Roboto', sans-serif;
    font-weight:bold;
    letter-spacing:2px;
`