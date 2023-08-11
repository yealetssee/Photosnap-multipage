import { appalaciaTablet, moon, moonDesktop } from "@/assets/stories";
import styled from "styled-components";
import { Button } from "@/Components/shared/index";

const MainBanner = () => {
  return (
    <Wrapper>
      <ImageDiv />
      <InfoDiv>
        <Info>LAST MONTH'S FEATURED STORY</Info>
        <Title>HAZY FULL MOON OF APPALACHIA</Title>
        <Date>March 2nd 2020</Date>
        <Author>by John Appleseed</Author>
        <Description>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </Description>
        <Button text="read the story" to="stories" Bg="black" />
      </InfoDiv>
    </Wrapper>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const ImageDiv = styled.div`
  background-image: url(${moon});
  width: 100%;
  padding-top: 56.25%;
  height: 31.7rem;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 568px) {
    background-image: url(${appalaciaTablet});
    background-position: top;

    height: 680px;
  }

  @media (min-width: 1100px) {
    background-image: url(${moonDesktop});
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  background-color: #000;
  padding-block: 4.8rem;
  padding-inline: 2.8rem;
  @media (min-width: 568px) {
    position: absolute;
    width: 38.7rem;

    top: 12.2rem;
    left: 1.5rem;
    background-color: transparent;
    @media (min-width: 1100px) {
      left: 8rem;
      top: 16.2rem;
    }
  }
`;

const Info = styled.h4`
  color: #fff;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 2px;
`;

const Title = styled.h2`
  color: #fff;

  font-size: 32px;

  font-weight: 700;
  line-height: 40px;
  letter-spacing: 3.333px;
  margin-top: 1.6rem;
  @media (min-width: 568px) {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: 0.41rem;
  }
`;

const Date = styled.span`
  color: rgb(255, 255, 255, 0.75);

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.6rem;
`;
const Author = styled(Date)`
  margin-left: 0.8rem;
`;

const Description = styled.p`
  color: rgb(255, 255, 255, 0.6);

  font-size: 15px;

  font-weight: 400;
  line-height: 25px;
  margin-top: 2.4rem;
  @media (min-width: 568px) {
    font-size: 15px;

    font-weight: 400;
    line-height: 25px;
  }
`;
