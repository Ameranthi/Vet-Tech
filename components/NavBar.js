// https://www.youtube.com/watch?v=LyEc2fGCR90
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Burger } from '@mantine/core';

const Nav = styled.nav`
height: 80px;
padding: 15px;
background: var(--primary-color);
font-size: 18px;
color: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font: roboto;
`;

const StyledLink = styled.div`
padding: 10px;
height: 80px;
line-height: 62px;
text-align: center;
cursor: pointer;
transition: background 0.15s ease;

&:hover {
    background: var(--secondary-color);
}
`;

const HomeLink = styled.div`
font-size: 25px;
padding: 10px;
height: 80px;
line-height: 55px;
cursor: pointer;
`;

const HamburgerMenu = styled.div`
height: 80px;
width: 80px;
padding: 15px;
background-color: var(--primary-color);
display: flex;
flex-direction: column;
justify-content: center;
&:hover {
    background-color: var(--mobile-hover-color);
}
`

const MenuBar = styled.div`
width: 35px;
height: 5px;
background-color: white;
margin: 4px auto;
`
const MobileLinks = styled.div`
display: flex;
flex-direction: column
`

const DesktopLinks = styled.div`
display: flex;
`
/**
 * Function returns the navbar JSX Element fitted to fit mobile and window sizing.
 * Collapses into hamburger menu for mobile.
 * @returns {JSX.Element} - JSX Element fitted to user's screen size.
 * @constructor
 */
const NavBar = (props) => {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const [mobileHidden, setMobileHidden] = useState(true)
    const [windowWidth, setWindowWidth] = useState(10000)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            window.innerWidth > 768 && setMobileHidden(true)
        })
        return () => {
            window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
        }
    }, [])

    const mobileMenuStyles = {
        display: windowWidth <= 768 ? 'block' : 'none',
        transition: 'left 0.5s',
        position: 'fixed',
        top: '80px',
        left: mobileHidden ? 'calc(100%)' : 'calc(50%)',
        height: 'calc(100% - 80px)',
        width: '50%',
        backgroundColor: 'var(--primary-color)',
        color: '#fff',
        fontSize: '18px',
        zIndex: '1000'
    }

    const styledLinks = props.isAdmin ? (
        <>
            <Link href="/topic-selection" passHref >
                <StyledLink onClick={() => !mobileHidden && setMobileHidden(true)}> Select Topics </StyledLink>
            </Link>

            <Link href="/aboutDev" passHref >
                <StyledLink onClick={() => !mobileHidden && setMobileHidden(true)}> About Us </StyledLink>
            </Link>
        </>
    )
    :
    (
        <>

        <Link href="/topic-selection" passHref >
            <StyledLink onClick={() => !mobileHidden && setMobileHidden(true)}> Select Topics </StyledLink>
        </Link>

        <Link href="/aboutDev" passHref >
            <StyledLink onClick={() => !mobileHidden && setMobileHidden(true)}> About Us </StyledLink>
        </Link>
        </>
    )

    return (
        <>
        <Nav>
            <div>
                <Link href="/" passHref >
                    <HomeLink> Fennec </HomeLink> 
                </Link>
            </div>
            <div>    
                {windowWidth <= 768 ? 
                <div onClick={() => setMobileHidden(!mobileHidden)}>
                    <Burger
                      size={30}
                      color={"#FFFFFF"}
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      title={title}
                    />
                </div> : 
                <DesktopLinks>{styledLinks}</DesktopLinks>
                }
            </div>
        </Nav>
        <div style={mobileMenuStyles}>
            <MobileLinks> 
                {styledLinks}
            </MobileLinks>
        </div>
        </>
    )
}

export default NavBar
