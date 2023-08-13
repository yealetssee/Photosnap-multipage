import { Banner, InviteBanner } from "@/Components";
import Price from "@/Components/Pricing/Price";
import {
  PricingHero,
  PricingHeroMobile,
  PricingHeroTablet,
} from "@/assets/pricing";
import { useState } from "react";
import styled, { css } from "styled-components";

const Pricing = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <Wrapper>
      <Banner
        title="PRICING"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
        images={{
          mobile: PricingHeroMobile,
          tablet: PricingHeroTablet,
          desktop: PricingHero,
        }}
        Bg="black"
        right
      />
      <ContextWrapper>
        <PlanWrapper>
          <PlanSpan isFocused={isFocused}>Monthly</PlanSpan>
          <ButtonParent
            isFocused={isFocused}
            onClick={() => setIsFocused(!isFocused)}
          >
            <ButtonToggle isFocused={isFocused} />
          </ButtonParent>
          <Yearly isFocused={isFocused}>Yearly</Yearly>
        </PlanWrapper>
        <PriceWrapper>
          <Price
            Bg="#F5F5F5"
            isFocused={isFocused}
            title="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={19}
          />
          <Price
            Bg="#000000"
            isFocused={isFocused}
            title="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price={39}
          />
          <Price
            Bg="#F5F5F5"
            isFocused={isFocused}
            title="Business"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            price={99}
          />
        </PriceWrapper>
      </ContextWrapper>
      <InviteBanner />
    </Wrapper>
  );
};
export default Pricing;

const Wrapper = styled.div`
  margin-top: 7.3rem;
`;

const ContextWrapper = styled.main`
  width: 100%;
  padding-inline: 2.8rem;
  padding-block: 6.4rem;
`;

const PlanWrapper = styled.div`
  width: 30.5rem;
  padding-inline: 3.1rem;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

type FocusType = {
  isFocused: boolean;
};
const PlanSpan = styled.span<FocusType>(
  ({ isFocused }) => css`
    color: ${isFocused ? "rgb(0, 0, 0,0.5)" : "#000"};

    font-size: 18px;

    font-weight: 700;
    line-height: 25px;
  `,
);
const Yearly = styled(PlanSpan)<FocusType>(
  ({ isFocused }) => css`
    color: ${isFocused ? "#000" : "rgb(0, 0, 0,0.5)"};
  `,
);

const ButtonParent = styled.div<FocusType>(
  ({ isFocused }) => css`
    position: relative;
    background-color: ${isFocused ? "#000000" : "#dfdfdf"};
    width: 6.4rem;
    height: 3.2rem;
    border-radius: 40px;

    transition: 0.2s ease-in-out;
    &:focus {
      background-color: red;
    }
  `,
);

const ButtonToggle = styled.div<FocusType>(
  ({ isFocused }) => css`
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 1.2rem;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%) translateX(${isFocused ? "3.5rem" : "0rem"});
    transition: 0.2s ease-in-out;

    background-color: ${isFocused ? "#dfdfdf" : "#000000"};
  `,
);

const PriceWrapper = styled.div`
  @media (min-width: 1100px) {
    display: flex;
  }
`;
