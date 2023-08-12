import styled, { css } from "styled-components";
import { Button } from ".";

type PropsType = {
  title: string;
  description: string;

  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  Bg: string;
  to?: string;
  buttonText?: string;
  right?: boolean;
};

const Banner: React.FC<PropsType> = ({
  title,
  description,
  buttonText,
  to,
  right,
  Bg,
  images: { mobile, tablet, desktop },
}) => {
  return (
    <Wrapper>
      <ImageDiv
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        right={right}
      />
      <InfoDiv Bg={Bg} right={right}>
        <Title style={{ color: Bg === "black" ? "white" : "black" }}>
          {title}
        </Title>
        <Description
          style={{
            color:
              Bg === "black"
                ? "rgb(255, 255, 255, 0.6)"
                : "rgba(0, 0,  1, 0.6)",
          }}
        >
          {description}
        </Description>

        {buttonText && <Button text={buttonText} Bg={Bg} to={to} />}
      </InfoDiv>
    </Wrapper>
  );
};

export default Banner;

type ImageType = {
  mobile: string;
  tablet: string;
  desktop: string;
  right: boolean;
};
type BackgroundType = {
  Bg: string;
  right: boolean;
};

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 568px) {
    display: flex;
  }
`;

const ImageDiv = styled.div(
  ({ mobile, tablet, desktop, right }: ImageType) => css`
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    background-image: url(${mobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (min-width: 568px) {
      background-image: url(${tablet});
      width: 40%;
      order: ${right ? "2" : "1"};
    }
    @media (min-width: 1100px) {
      background-image: url(${desktop});
      width: 60%;
    }
  `,
);

const InfoDiv = styled.div<BackgroundType>(
  ({ Bg, right }) => css`
    width: 100%;
    background-color: ${Bg};
    padding-block: 7.4rem;
    padding-inline: 3.3rem 2.4rem;

    @media (min-width: 568px) {
      width: 60%;
      order: ${right ? "1" : "2"};
      padding-block: 17.3rem;
      padding-inline: 5.4rem;
    }
    @media (min-width: 1100px) {
      width: 40%;

      padding-inline: 11.1rem;
    }
  `,
);

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 0.333rem;
  text-transform: uppercase;
  @media (min-width: 568px) {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: 0.4rem;
  }

  @media (min-width: 1400px) {
    font-size: 4.8rem;
  }
`;

const Description = styled.h3`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 1.6rem;
`;
