import styled, { css } from "styled-components";

type PropsType = {
  logo: JSX.Element;
  title: string;
  description: string;
  double?: boolean;
};

const Feature: React.FC<PropsType> = ({ logo, title, description, double }) => {
  return (
    <Wrapper double={double}>
      {logo}

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Feature;

type PropType = {
  double?: boolean;
};

const Wrapper = styled.div<PropType>(
  ({ double }) => css`
    padding-top: 8rem;
    padding-inline: 3.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
    @media (min-width: 568px) {
      padding-inline: ${double ? "3rem" : "15.5rem"};

      width: ${double ? "50%" : "null"};
    }
    @media (min-width: 1100px) {
      padding-inline: 0rem;
      padding-top: 12rem;
      width: 30%;
    }
  `,
);

const Title = styled.h3`
  color: #000;
  text-align: center;

  font-size: 18px;

  font-weight: 700;
  line-height: 25px;
  margin-top: 4.8rem;
`;

const Description = styled.h4`
  color: rgb(0, 0, 0, 0.6);
  text-align: center;

  font-size: 15px;

  font-weight: 400;
  line-height: 25px;
  margin-top: 1.6rem;
  @media (min-width: 1100px) {
    text-align: center;
  }
`;
