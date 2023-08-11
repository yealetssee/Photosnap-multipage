import { MainBanner } from "@/Components/Stories";
import styled from "styled-components";
import Items from "@/Components/Stories/Data";
import { StoriesBanner } from "@/Components";

const Stories = () => {
  return (
    <Wrapper>
      <MainBanner />
      <StoriesWrapper>
        {Items.map((item, index) => {
          return (
            <StoriesBanner
              key={index}
              title={item.title}
              author={item.author}
              date={item.date}
              images={{
                mobile: item.path.mobile,
                tablet: item.path.tablet,
                desktop: item.path.desktop,
              }}
            />
          );
        })}
      </StoriesWrapper>
    </Wrapper>
  );
};
export default Stories;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 7.3rem;
`;

const StoriesWrapper = styled.div`
  width: 100%;
  @media (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
