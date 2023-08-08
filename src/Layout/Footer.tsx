import { Arrow, Logo, SocialLogos } from "@/Svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterEl>
      <Logo white />
      <SocialLogos />
      <FooterMenu>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <MenuLinkItem>home</MenuLinkItem>
        </Link>
        <Link to={"stories"} style={{ textDecoration: "none" }}>
          <MenuLinkItem>stories</MenuLinkItem>
        </Link>
        <Link to={"features"} style={{ textDecoration: "none" }}>
          <MenuLinkItem>features</MenuLinkItem>
        </Link>
        <Link to={"pricing"} style={{ textDecoration: "none" }}>
          <MenuLinkItem>pricing</MenuLinkItem>
        </Link>
      </FooterMenu>

      <InviteWrapper>
        <InviteSpan>get an invite</InviteSpan>
        <Arrow />
      </InviteWrapper>

      <RightsSpan>Copyright 2019. All Rights Reserved</RightsSpan>
    </FooterEl>
  );
};

export default Footer;

const FooterEl = styled.footer`
  width: 100%;
  padding-block: 5.6rem;
  padding-inline: 6rem;
  display: grid;
  grid-template-columns: 1fr;
  /* align-items: center; */
  justify-items: center;
  grid-template-rows: repeat(5, auto);
  gap: 3.4rem;

  background-color: #000;
`;

const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.9rem;
  margin-top: 1.5rem;
  margin-bottom: 8.5rem;
`;

const MenuLinkItem = styled.span`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const InviteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

const InviteSpan = styled(MenuLinkItem)``;

const RightsSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.5025);
  text-transform: uppercase;
  text-align: center;
`;
