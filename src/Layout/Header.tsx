import styled from "styled-components";
import { Burger, Logo } from "../Svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderEl>
      <Link to={"/"}>
        <Logo />
      </Link>

      <Burger />
    </HeaderEl>
  );
};

export default Header;

const HeaderEl = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.8rem;
  padding-inline: 2.4rem 3.3rem;
`;
