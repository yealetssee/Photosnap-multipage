import styled, { css } from "styled-components";
import { Button } from ".";

type PropsType = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  author: string;
  date?: string;
};

const StoriesBanner: React.FC<PropsType> = ({
  title,
  author,
  images: { mobile, tablet, desktop },
  date,
}) => {
  return (
    <Wrapper mobile={mobile} tablet={tablet} desktop={desktop}>
      <InfoDiv>
        {date && <DateSpan>{date}</DateSpan>}
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Button to="stories" text="read story" Bg="black" />
      </InfoDiv>
    </Wrapper>
  );
};

export default StoriesBanner;

type ImageType = {
  mobile: string;
  tablet: string;
  desktop: string;
};
const Wrapper = styled.div<ImageType>(
  ({ mobile, tablet, desktop }) => css`
    width: 100%;
    height: fit-content;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.66) 100%
      ),
      url(${mobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 568px) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.66) 100%
        ),
        url(${tablet});
      width: 50%;
    }

    @media (min-width: 1100px) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.66) 100%
        ),
        url(${desktop});
      width: 25%;
    }
  `,
);

const InfoDiv = styled.div`
  padding-block: 23.6rem 4rem;
  padding-inline: 3.2rem;
`;

const Title = styled.h3`
  color: #fff;
  text-transform: uppercase;

  font-size: 18px;

  font-weight: 700;
  line-height: 25px;
`;

const Author = styled.h5`
  color: #fff;
  text-transform: uppercase;

  font-size: 13px;

  font-weight: 400;
`;

const DateSpan = styled.span`
  color: #fff;

  font-size: 13px;

  font-weight: 400;
`;
