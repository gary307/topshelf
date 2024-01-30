import * as React from "react";
import { styled } from "styled-components";
import Shankydrink from "../../../images/shankydrink.png";
import HaigLogo from "../../../images/haig_logo_white.png";
import Glitch from "../../../images/glitch.png";
import haigLogoEmbossedImage from "../../../images/haig_logo_embossed.jpg";
import MakeYOurOwnRuleGif from "../../../images/Make-Your-Own-Rules.gif";

const HaigWrapper = styled.div`
  background: url(${Glitch}), #333;
  background-blend-mode: overlay;
  background-position: 0px 210px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 80px;
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
`;

const WorkImage = styled.img`
  grid-column: span 3;
  width: 100%;
  object-fit: cover;
  height: 400px;
`;

const WorkDescription = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-top: 20px;
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
          src="https://www.youtube.com/embed/jU4e85h9DDI?si=OgTpQYlCCVLWQlT1"
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
            <h2>Haig story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate, convallis justo fringilla, vulputate est.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In libero elit, fermentum ac turpis in,
              convallis feugiat tortor. Cras in massa metus. Morbi pretium justo
            </p>

            <p>
              quis felis luctus posuere. Sed nec nibh vitae augue gravida
              tincidunt fringilla quis mi. Ut ultrices maximus diam, lobortis
              fermentum erat ultrices eget. posuere cubilia curae; In libero
              elit, fermentum ac turpis in, convallis feugiat tortor. Cras in
              massa metus. Morbi pretium justo quis felis luctus posuere. Sed
              nec nibh vitae augue gravida tincidunt fringilla quis mi. Ut
              ultrices maximus diam, lobortis fermentum erat ultrices eget.
            </p>
          </WorkDescriptionCopy>
        </WorkDescription>
      </WorkWrapper>
    </HaigWrapper>
  );
};

export default ShankyWork;
