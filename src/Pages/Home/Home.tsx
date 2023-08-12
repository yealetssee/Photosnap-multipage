import { Feature } from "@/Components/Features";
import { Banner, StoriesBanner } from "@/Components/shared";
import { Embed, Nolimit, Responsive } from "@/Svg";
import {
  createShareDesktop,
  createShareMobile,
  createShareTablet,
  everyoneDesktop,
  everyoneMobile,
  everyoneTablet,
  storiesDesktop,
  storiesMobile,
  storiesTablet,
} from "@/assets/home";
import {
  architecturals,
  architecturalsDesktop,
  cityskapes,
  cityskapesDesktop,
  mountains,
  mountainsDesktop,
  voyage,
  voyageDesktop,
} from "@/assets/stories";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <Banner
        right
        title="Create and share your photo stories "
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="Get An Invite"
        images={{
          mobile: createShareMobile,
          tablet: createShareTablet,
          desktop: createShareDesktop,
        }}
        Bg="black"
        to="pricing"
      />
      <Banner
        Bg="white"
        to="stories"
        images={{
          mobile: storiesMobile,
          tablet: storiesTablet,
          desktop: storiesDesktop,
        }}
        buttonText="View The Stories"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        title="Beautiful Stories Every Time"
      />
      <Banner
        right
        Bg="white"
        to="stories"
        images={{
          mobile: everyoneMobile,
          tablet: everyoneTablet,
          desktop: everyoneDesktop,
        }}
        buttonText="view the stories"
        description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        title="DESIGNED FOR EVERYONE"
      />
      <StoriesWrapper>
        <StoriesBanner
          title="the mountains"
          author="by John Appleseed"
          images={{
            mobile: mountains,
            tablet: mountainsDesktop,
            desktop: mountainsDesktop,
          }}
        />
        <StoriesBanner
          title="sunset cityskapes"
          author="by Benjamin Cruz"
          images={{
            mobile: cityskapes,
            tablet: cityskapesDesktop,
            desktop: cityskapesDesktop,
          }}
        />
        <StoriesBanner
          title="18 days voyage"
          author="by Alexei Borodin"
          images={{
            mobile: voyage,
            tablet: voyageDesktop,
            desktop: voyageDesktop,
          }}
        />
        <StoriesBanner
          title="architecturals"
          author="by Samantha Brooke"
          images={{
            mobile: architecturals,
            tablet: architecturalsDesktop,
            desktop: architecturalsDesktop,
          }}
        />
      </StoriesWrapper>
      <FeaturesWrapper>
        <Feature
          title="100% responsive "
          description="No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
          logo={<Responsive />}
        />
        <Feature
          title="No Photo Upload Limit "
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          logo={<Nolimit />}
        />
        <Feature
          title="Available to Embed "
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
          logo={<Embed />}
        />
      </FeaturesWrapper>
    </HomeWrapper>
  );
};
export default Home;

const HomeWrapper = styled.main`
  margin-top: 7.3rem;
`;

const StoriesWrapper = styled.div`
  width: 100%;
  @media (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const FeaturesWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 8rem;
  @media (min-width: 1100px) {
    display: flex;
    padding-bottom: 12rem;
    padding-inline: 16.5rem;
    align-items: flex-end;

    column-gap: 3rem;
  }
`;
