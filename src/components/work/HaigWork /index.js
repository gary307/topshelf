import * as React from "react";
import { styled } from "styled-components";
import HaigLogo from "../../../images/haig_logo_white.png";
import Glitch from "../../../images/glitch.png";
import haigLogoEmbossedImage from "../../../images/haig_logo_embossed.jpg";
import MakeYOurOwnRuleGif from "../../../images/Make-Your-Own-Rules.gif";

const HaigWrapper = styled.div`
  background: url(${Glitch}), #232b30;
  background-blend-mode: overlay;
  background-position: 0px 210px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: 1000px) {
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-position: 0px;
  }
`;

const WorkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

const YoutubeIframe = styled.iframe`
  grid-column: span 5;
  width: 100%;
  height: 400px;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const WorkImage = styled.img`
  grid-column: span 3;
  width: 100%;
  object-fit: cover;
  height: 400px;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkDescription = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkDescriptionCopy = styled.div`
  max-width: 80%;
  margin: 0 auto;
  z-index: 100;
  position: relative;
  z-index: 100;

  h2 {
    font-size: 40px;
    margin-bottom: 40px;
  }

  p {
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: 18px;
  }
`;

const HaigLogoImg = styled.img`
  width: 200px;
`;

const HaigLogoEmbossed = styled.img`
  position: absolute;
  opacity: 0.5;
  right: 0;
  width: 500px;
`;

const ShankyWork = () => {
  return (
    <HaigWrapper>
      <WorkTitle>
        <HaigLogoImg src={HaigLogo} alt="ShankyLogo" />
      </WorkTitle>
      <WorkWrapper>
        <YoutubeIframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mKGJG_vJbyw?si=7Ej7AxgHMDqXmC5D"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></YoutubeIframe>

        <WorkImage src={MakeYOurOwnRuleGif} alt="Shankydrink" />

        <WorkDescription>
          <HaigLogoEmbossed
            src={haigLogoEmbossedImage}
            alt="HaigLogoEmbossed"
          />
          <WorkDescriptionCopy>
            <h2>HAIG</h2>
            <p>
              Haig whiskey wanted to launch their new bottle design and spread
              the Make Your Own Rules message. Showing the product at home in a
              series of 'current' social environments.
            </p>
          </WorkDescriptionCopy>
        </WorkDescription>
      </WorkWrapper>
    </HaigWrapper>
  );
};

export default ShankyWork;
