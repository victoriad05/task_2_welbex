import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Nav = styled.div`
    background: var(--bg-dark);
    height: 100%;
    width: 100%;
    height: 3.43rem;

    @media screen and (min-width: 481px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    padding: 1.25rem 1rem 1.25rem 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`
export const NavLinks = styled.li`

`
export const NavItem = styled(Link)`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
`

