import * as React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import Logo from "../../../images/logo.png";
import HeroVideo from "../../../renders/top_shelf_hero_video_compressed.mp4";
import Flowers from "../../../images/flowers.png";
import { Gradiant } from "../../../shared/Gradiant";

const HeroColumn = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  z-index: 999;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const HeroVideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0px;

  video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;

    @media (max-width: 1000px) {
      width: 200%;
      margin-left: -50%;
    }
  }
`;

const HeroContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 250px 0 200px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  background: #555555;
  position: relative;
  background-image: url(${Flowers});
  background-size: contain;
  backgrund-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
  background-blend-mode: soft-light;
  background-color: #38454d;

  @media (max-width: 1000px) {
    padding: 150px 0 100px 0;
    background-repeat: no-repeat;
  }

  @media (max-width: 800px) {
    padding: 80px 0 100px 0;
    background-size: 800px;
    background-repeat: no-repeat;
  }
`;

const CrossHairImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  width: 100%;
  bottom: 67%;
  mix-blend-mode: plus-lighter;

  @media (max-width: 1000px) {
    bottom: 71%;
  }

  @media (max-width: 800px) {
    bottom: 85%;
  }

  img {
    @media (max-width: 1000px) {
      width: 300px;
    }

    @media (max-width: 800px) {
      width: 200px;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  position: relative;
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Gradiant />
      <HeroVideoWrapper>
        <video autoPlay loop muted playsInline src={HeroVideo}>
          <p>Description of the video...</p>
        </video>
      </HeroVideoWrapper>
      <HeroContainer>
        <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />
        <LogoContainer>
          <img src={Logo} alt="Top Shelf beverage brand content production" />
        </LogoContainer>
        <HeroColumn>
          <HeroTitle>TOP SHELF IS...</HeroTitle>

          <div>
            <p>
              …a one-stop creative production shop. From primordial creative
              development through to all stages of production. We help your
              brand find its voice, then amplify it to have meaningful
              conversations with your audience. Beautifully crafted content with
              real stopping power.
            </p>
          </div>
        </HeroColumn>
      </HeroContainer>
    </Wrapper>
  );
};
