import styled from "styled-components";

type PropsType = {
  logo: JSX.Element;
  title: string;
  description: string;
};

const Feature: React.FC<PropsType> = ({ logo, title, description }) => {
  return (
    <Wrapper>
      {logo}

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Feature;

const Wrapper = styled.div`
  padding-top: 8rem;
  padding-inline: 3.3rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 568px) {
    padding-inline: 15.5rem;
  }
  @media (min-width: 1100px) {
    padding-inline: 0rem;
    padding-top: 12rem;
  }
`;

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
