import styled from "styled-components";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = ({ mode, handleTheme }) => {
    return (
        <Nav>
            <div></div>
            <IconContainer>
                {
                    mode === 'dark' ?
                    (<StyledSun onClick={handleTheme}/>) :
                    (<StyledMoon onClick={handleTheme}/>)
                }
            </IconContainer>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    background: ${({theme}) => theme.colors.card_bg};
    padding: 0.6rem 5rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme}) => theme.colors.text_primary};
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledSun = styled(SunIcon)`
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    color: ${({theme}) => theme.colors.btn_warning};
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const StyledMoon = styled(MoonIcon)`
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }
`;