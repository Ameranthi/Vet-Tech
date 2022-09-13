import styled from 'styled-components';
import Link from 'next/link';


const FooterSection = styled.div`
background: var(--primary-color);
font-size: 12px;
padding: 15px;
color: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: background 0.15s ease;

& a:hover {
    color: var(--pale-background-color);
}

`;

const StyledLink = styled.a`
padding: 0rem, 2rem;
`;

/**
 * This is the footer HTMl element for all pages.
 * @returns {JSX.Element} - Footer containing copyright, Fall 2021 Team, and Admin Login Link.
 * @constructor
 */
const Footer = () => {
    return (
        <FooterSection>
            <ul>
            <Link href= "/privacypolicy"  >
                     Privacy Policy 
            </Link>
            <Link href= "/analytics"  >
                     Admin 
            </Link>
            </ul>
        </FooterSection>
    )
}

export default Footer
