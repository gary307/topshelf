import * as React from "react";
import { styled } from "styled-components";
import pbLogo from "../../../images/pb-logo.png";
import pbBg from "../../../images/pg-bg.png";
import PAndBImgOne from "../../../images/pandb1.gif";
import PAndBImgTwo from "../../../images/pandb2.gif";

const Wrapper = styled.div`
  background: url(${pbBg}), #333;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (max-width: 1000px) {
    padding: 20px;
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
    max-width: 700px;
  }
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

const YoutubeIframe = styled.iframe`
  grid-column: span 5;
  width: 100%;
  height: 485px;

  @media (max-width: 600px) {
    height: 220px;
  }
`;

const WorkImage = styled.img`
  grid-column: span 3;
  width: 100%;
  object-fit: cover;
  height: 484px;
  margin-bottom: 20px;
`;

const WorkDescription = styled.div`
  text-align: center;
  grid-column: 1 / span 5;

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

const LogoImg = styled.img`
  width: 300px;
`;

const WorkImages = styled.div`
  grid-column: 6 / span 3;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkVideoAndDescription = styled.div`
  grid-column: span 5;

  @media (max-width: 1000px) {
    grid-column: span 8;
  }
`;

const WorkRender = styled.video`
  width: 100%;
`;

const PodAndBriar = () => {
  return (
    <Wrapper>
      <WorkTitle>
        <LogoImg src={pbLogo} alt="Limonata Logo" />
      </WorkTitle>
      <WorkWrapper>
        <WorkVideoAndDescription>
          <YoutubeIframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F8Nq4Aio9eY?si=PNLw3O1eqY7Idty7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></YoutubeIframe>

          <WorkDescription>
            <WorkDescriptionCopy>
              <h2>Pod & Briar</h2>
              <p>
              Vegan chocolatiers Pod&Briar wanted to reach their audience and educate them on the incredible love, craft and ingredients that go into each and everyone of their unique chocolates. We produced a fun, upbeat video campaign to spread the word across social platforms.
              </p>
            </WorkDescriptionCopy>
          </WorkDescription>
        </WorkVideoAndDescription>

        <WorkImages>
          <WorkImage src={PAndBImgOne} alt="Limonata Work image" />
          <WorkImage src={PAndBImgTwo} alt="Limonata Work image" />
        </WorkImages>
      </WorkWrapper>
    </Wrapper>
  );
};

export default PodAndBriar;
