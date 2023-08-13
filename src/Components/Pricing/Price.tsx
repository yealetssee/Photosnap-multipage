import styled, { css } from "styled-components";

type PropsType = {
  Bg: string;
  isFocused: boolean;
  price: number;
  description: string;
  title: string;
};
const Price: React.FC<PropsType> = ({
  Bg,
  isFocused,
  price,
  description,
  title,
}) => {
  return (
    <PricingWrapper>
      <PricingDiv
        style={{
          backgroundColor: `${Bg}`,
          color: `${Bg === "#F5F5F5" ? "#000000" : "#F5F5F5"}`,
        }}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceDiv>
          <PriceH>${isFocused ? price - 9 : price}.00</PriceH>
          <Per>{isFocused ? "per year" : "per month"}</Per>
        </PriceDiv>
        <PlanButton
          style={{
            backgroundColor: `${Bg === "#F5F5F5" ? "#000000" : "#F5F5F5"}`,
            color: `${Bg === "#F5F5F5" ? "#F5F5F5" : "#000000"}`,
          }}
        >
          Pick Plan
        </PlanButton>
      </PricingDiv>
    </PricingWrapper>
  );
};

export default Price;

const PricingWrapper = styled.div`
  width: 100%;
  padding-inline: 2.9rem;
  /* padding-block: 4rem 6.4rem; */
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1100px) {
    display: block;
    /* width: 20%; */
  }
`;

const PricingDiv = styled.div`
  width: 31.8rem;
  height: 40.7rem;
  padding-block: 5.6rem 4rem;
  padding-inline: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  @media (min-width: 768px) {
    width: 68.9rem;
    height: 30rem;
    padding-inline: 4rem;
    padding-block: 4rem;
    align-items: flex-start;
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* flex-direction: row; */
    flex-wrap: wrap;
  }
  @media (min-width: 1100px) {
    width: 35rem;
    height: 40.7rem;
    padding-block: 5.6rem 4rem;
    padding-inline: 2.2rem;
    align-items: center;
  }
`;

const Title = styled.h4`
  text-align: center;

  font-size: 24px;

  font-weight: 700;
  line-height: 25px;
`;

const Description = styled.p`
  /* text-align: center; */

  font-size: 15px;

  font-weight: 400;
  line-height: 25px;
  @media (min-width: 768px) {
    width: 27rem;
  }
`;

const PriceDiv = styled.div`
  width: 100%;
  margin-top: 2.2rem;
  @media (min-width: 768px) {
    width: 20%;
    order: 2;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media (min-width: 1100px) {
    width: 100%;
    order: unset;
    align-items: center;
    margin-left: unset;
  }
`;

const PriceH = styled.h2`
  font-size: 40px;

  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
`;

const Per = styled.p`
  font-size: 15px;

  font-weight: 400;
  line-height: 25px;
`;

const PlanButton = styled.button`
  width: 24.5rem;
  padding-inline: 3.72rem;
  padding-block: 1.2rem;
  border: none;
  margin-top: 2.2rem;

  text-align: center;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 2px;
  cursor: pointer;
`;
