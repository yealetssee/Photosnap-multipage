import { Invite, InviteMobile, InviteTablet } from "@/assets/shared";
import styled from "styled-components";
import { Button } from ".";

const InviteBanner = () => {
  return (
    <Wrapper>
      <InfoDiv>
        <Title>We're in beta. Get your invite today!</Title>
        <Button to="/pricing" text="get an invite" Bg="black" />
      </InfoDiv>
    </Wrapper>
  );
};

export default InviteBanner;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url(${InviteMobile});
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 6.4rem;
  padding-inline: 3.3rem;
  @media (min-width: 768px) {
    background-image: url(${InviteTablet});
    padding-block: 6.8rem;
    padding-inline: 4rem;
  }
  @media (min-width: 1100px) {
    background-image: url(${Invite});
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    padding-block: 6.8rem;
    padding-inline: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const Title = styled.h3`
  color: #fff;

  font-size: 3.2rem;

  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 3.333px;
  @media (min-width: 768px) {
    color: #fff;
    width: 40rem;

    font-size: 40px;

    font-weight: 700;
    line-height: 48px;
    letter-spacing: 4.167px;
    text-transform: uppercase;
  }
`;
