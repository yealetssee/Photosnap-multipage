import { Button } from "@/Components/shared";
import { Logo, SocialLogos } from "@/Svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterEl>
      <Logo white />
      <SocialWrapper>
        <SocialLogos />
      </SocialWrapper>

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
      <ButtonWrapper>
        <Button text="get an invite" Bg="black" to="pricing" />
      </ButtonWrapper>

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

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    padding-inline: 4rem;
    justify-items: start;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    /* display: block; */
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto 12.2rem;
    padding-block: 6.5rem;
    padding-inline: 17rem;
    grid-gap: 0;
  }
`;

const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.9rem;
  margin-top: 1.5rem;
  margin-bottom: 8.5rem;
  @media (min-width: 568px) {
    flex-direction: row;
    grid-column: 1/2;
    grid-row: 2/3;
  }
  @media (min-width: 1100px) {
    flex-direction: column;
    grid-column: 2/3;
    margin-top: -1rem;
    margin-left: -20rem;
  }
`;

const MenuLinkItem = styled.span`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const RightsSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.5025);
  text-transform: uppercase;
  text-align: center;
  @media (min-width: 1100px) {
    grid-row: 2/3;
    grid-column: 3/-1;
    align-self: self-end;
  }
`;

const SocialWrapper = styled.div`
  @media (min-width: 568px) {
    grid-column: 1/2;
    grid-row: 3/-1;
  }
  @media (min-width: 1100px) {
    grid-row: 2/3;
    align-self: flex-end;
  }
`;

const ButtonWrapper = styled(SocialWrapper)`
  @media (min-width: 568px) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  @media (min-width: 1100px) {
    grid-column: 3/-1;
    grid-row: 1/2;
    margin-top: -3rem;
  }
`;
