import * as React from 'react';
import { StyledLink, Container, Title } from './header.style'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const { pathname } = useLocation()
    return (
        <Container>

            <Title>Felipe</Title>
            <div>
                <StyledLink to='/' color={pathname === '/' ? '#5398BE' : '#FFFF'} hover={pathname === '/' ? '#FFFF' : '#CCCC'}  >SOBRE</StyledLink>
                <StyledLink to='/tecnologies' color={pathname === '/tecnologies' ? '#5398BE' : '#FFFF'} hover={pathname === '/tecnologies' ? '#FFFF' : '#CCCC'}>TECNOLOGIAS</StyledLink>
                <StyledLink to='/projects' color={pathname === '/projects' ? '#5398BE' : '#FFFF'} hover={pathname === '/projects' ? '#FFFF' : '#CCCC'}>PROJETOS</StyledLink>
            </div>
        </Container>
    )
}

export default Header