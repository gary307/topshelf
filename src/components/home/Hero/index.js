import * as React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import Logo from "../../../images/logo.png";
import HeroVideo from "../../../renders/reel_2018.mp4";
import Flowers from "../../../images/flowers.png";

const HeroColumn = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const HeroVideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;

    @media (max-width: 800px) {
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
  background-color: #38454d;

  @media (max-width: 800px) {
    padding: 80px 0 100px 0;
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
  bottom: 65%;

  @media (max-width: 800px) {
    bottom: 85%;
  }

  img {
    @media (max-width: 800px) {
      width: 200px;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;

export const Hero = () => {
  return (
    <>
      <HeroVideoWrapper>
        <video autoPlay loop muted src={HeroVideo}>
          <p>Description of the video...</p>
        </video>
      </HeroVideoWrapper>
      <HeroContainer>
        <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <HeroColumn>
          <HeroTitle>TOP SHELF IS...</HeroTitle>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate, convallis justo fringilla, vulputate est.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In libero elit, fermentum ac turpis in,
              convallis feugiat tortor. Cras in massa metus. Morbi pretium justo
              quis felis luctus posuere. Sed nec nibh vitae augue gravida
              tincidunt fringilla quis mi. Ut ultrices maximus diam, lobortis
              fermentum erat ultrices eget.
            </p>
          </div>
        </HeroColumn>
      </HeroContainer>
    </>
  );
};
