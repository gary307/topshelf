import * as React from "react";
import { styled } from "styled-components";
import Shankydrink from "../../../images/shankydrink.png";
import Shanlybnpttleshpt from "../../../images/shanlybnpttleshpt.jpg";
import ShankyLogo from "../../../images/shankys-whip-logo.png";
import OstrichEmblems from "../../../images/ostrich-emblems.png";
import WhipHeadImg from "../../../images/whip_head.png";
import OstrichImage from "../../../images/ostrich.png";

const ShankyWrapper = styled.div`
  background: url(${OstrichEmblems}), #333;
  background-position: 140% 100px;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: 1000px) {
    padding-top: 20px;
    padding-bottom: 40px;
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

  @media (max-width: 1000px) {
    padding: 30px;
    box-sizing: border-box;
    margin-top: 20px;
  }
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 200px;
`;

const YoutubeIframe = styled.iframe`
  grid-column: span 4;
  width: 100%;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkImage = styled.img`
  grid-column: span 4;
  width: 100%;
  object-fit: cover;
  height: 300px;
  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkDescription = styled.div`
  grid-column: span 4;
  text-align: center;

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

const WorkSmallerImages = styled.div`
  grid-column: span 4;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkSmallerImage = styled.img`
  grid-column: span 4;
  width: 100%;
  object-fit: cover;
  height: 200px;
  margin-bottom: 20px;
`;

const ShankyLogoImg = styled.img`
  width: 200px;
`;

const BackgroundShankyImg = styled.img`
  position: absolute;
  left: 0;
`;

const ShankyWork = () => {
  return (
    <ShankyWrapper>
      <WorkTitle>
        <ShankyLogoImg src={ShankyLogo} alt="ShankyLogo" />
      </WorkTitle>
      <WorkWrapper>
        <YoutubeIframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/984DCHNX94s?si=B_iVyMmugF38zwZO?color=white"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></YoutubeIframe>

        <WorkImage src={Shankydrink} alt="Shankydrink" />
        <WorkImage src={Shanlybnpttleshpt} alt="Shankydrink" />
        <WorkImage src={Shanlybnpttleshpt} alt="Shankydrink" />

        <WorkDescription>
          <BackgroundShankyImg src={WhipHeadImg} alt="Shankydrink" />
          <WorkDescriptionCopy>
            <h2>SHANKY'S Tale</h2>

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

        <WorkSmallerImages>
          <WorkSmallerImage src={Shankydrink} alt="Shankydrink" />
          <WorkSmallerImage src={OstrichImage} alt="Shankydrink" />
        </WorkSmallerImages>
      </WorkWrapper>
    </ShankyWrapper>
  );
};

export default ShankyWork;
