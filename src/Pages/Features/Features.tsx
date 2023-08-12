import { Banner } from "@/Components";
import { Feature } from "@/Components/Features";
import InviteBanner from "@/Components/shared/InviteBanner";
import { Boost, Domain, DragDrop, Embed, Nolimit, Responsive } from "@/Svg";
import { Hero, HeroMobile, HeroTablet } from "@/assets";

import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <Banner
        title="features"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        Bg="black"
        images={{ mobile: HeroMobile, tablet: HeroTablet, desktop: Hero }}
        right
      />
      <FeaturesWrapper>
        <Feature
          title="100% responsive "
          description="No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
          logo={<Responsive />}
          double
        />
        <Feature
          title="No Photo Upload Limit "
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          logo={<Nolimit />}
          double
        />
        <Feature
          title="Available to Embed "
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
          logo={<Embed />}
          double
        />
        <Feature
          title="custom domain "
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
          logo={<Domain />}
          double
        />
        <Feature
          title="Boost Your Exposure "
          description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. "
          logo={<Boost />}
          double
        />
        <Feature
          title="Drag & Drop Image "
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          logo={<DragDrop />}
          double
        />
      </FeaturesWrapper>
      <InviteBanner />
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  margin-top: 7.3rem;
`;

const FeaturesWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 8rem;

  @media (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 12rem;
    padding-inline: 16.5rem;
    align-items: flex-end;

    column-gap: 3rem;
  }
`;
