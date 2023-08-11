import styled from "styled-components";
import { Burger, Close, Logo } from "../Svg";
import { Link, useNavigate } from "react-router-dom";
import { Backdrop } from "@/Components";
import { useState } from "react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsShown(false);
  };
  return (
    <HeaderEl>
      <Link to={"/"} onClick={closeMenu}>
        <Logo />
      </Link>

      {!isShown ? (
        <IconWrapper>
          <Burger onClick={() => setIsShown(true)} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <Close onClick={closeMenu} />
        </IconWrapper>
      )}
      <NavbarMenu>
        <Link
          to={"stories"}
          style={{ textDecoration: "none" }}
          onClick={closeMenu}
        >
          <NavItem>stories</NavItem>
        </Link>
        <Link
          to={"features"}
          style={{ textDecoration: "none" }}
          onClick={closeMenu}
        >
          <NavItem>features</NavItem>
        </Link>
        <Link
          to={"pricing"}
          style={{ textDecoration: "none" }}
          onClick={closeMenu}
        >
          <NavItem>pricing</NavItem>
        </Link>

        <NavButton onClick={() => navigate("pricing")}>get an invite</NavButton>
      </NavbarMenu>

      {isShown && (
        <Backdrop>
          <MobileMenu>
            <Link
              to={"stories"}
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <MenuItem>stories</MenuItem>
            </Link>
            <Link
              to={"features"}
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <MenuItem>features</MenuItem>
            </Link>
            <Link
              to={"pricing"}
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <MenuItem>pricing</MenuItem>
            </Link>
            <Border />
            <Button onClick={() => navigate("pricing")}>get an invite</Button>
          </MobileMenu>
        </Backdrop>
      )}
    </HeaderEl>
  );
};

export default Header;

const HeaderEl = styled.header`
  width: 100%;
  display: flex;
  background-color: #fff;

  justify-content: space-between;
  align-items: center;
  padding-block: 2.8rem;
  padding-inline: 2.4rem 3.3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-around;
  }
`;

const MobileMenu = styled.div`
  padding: 3.2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const MenuItem = styled.span`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;

  font-weight: 700;

  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

const Border = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;

const Button = styled.button`
  padding-block: 1.4rem;
  padding-inline: 6.8rem;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.25rem;
  border: none;
  cursor: pointer;
`;

const NavbarMenu = styled.div`
  display: flex;

  gap: 3.7rem;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1100px) {
    justify-content: space-between;
  }
`;

const NavItem = styled(MenuItem)`
  font-size: 1.2rem;
`;
const NavButton = styled(Button)`
  padding-block: 1.2rem;
  padding-inline: 2.4rem;
`;

const IconWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
