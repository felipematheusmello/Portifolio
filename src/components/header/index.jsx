import * as React from 'react';
import { StyledLink, Container } from './header.style'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const { pathname } = useLocation()
    return (
        <Container>
            <StyledLink to='/' color={pathname === '/' ? '#5398BE' : '#FFFF'} >SOBRE</StyledLink>
            <StyledLink to='/tecnologies' color={pathname === '/tecnologies' ? '#5398BE' : '#FFFF'}>TECNOLOGIAS</StyledLink>
            <StyledLink to='/projects' color={pathname === '/projects' ? '#5398BE' : '#FFFF'}>PROJETOS</StyledLink>
        </Container>
    )
}

export default Header