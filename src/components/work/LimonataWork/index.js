import * as React from "react";
import { styled } from "styled-components";
import LimonataLogo from "../../../images/cin_cin_limonata.png";
import LimonataBg from "../../../images/Limonata_bg.jpg";
import LimonataImg from "../../../images/limonata_image.jpg";
import VirtualProductionStudio from "../../../renders/virtual_production_studio_1.mp4";

const Wrapper = styled.div`
  background: url(${LimonataBg}), #333;
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

const LimonataWork = () => {
  return (
    <Wrapper>
      <WorkTitle>
        <LogoImg src={LimonataLogo} alt="ShankyLogo" />
      </WorkTitle>
      <WorkWrapper>
        <WorkVideoAndDescription>
          <YoutubeIframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4eowDv_vNU0?si=vAf8zzG7K0eLKfaZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></YoutubeIframe>

          <WorkDescription>
            <WorkDescriptionCopy>
              <h2>Limonata's twist</h2>
              <p>
                Lemon infused RTD vodka Limonata Twist wanted to show their
                product in its natural habitat of the Italian coastline. Using
                our virtual production facility we created a realistic
                environment. VP studios remove the need for green screen which
                is great for filming liquids and glass providing practical
                lighting, high-end lighting.
              </p>
            </WorkDescriptionCopy>
          </WorkDescription>
        </WorkVideoAndDescription>

        <WorkImages>
          <WorkImage src={LimonataImg} alt="Shankydrink" />

          <WorkRender
            src={VirtualProductionStudio}
            autoPlay
            controls={false}
            playsInline
            muted
            loop
          />
        </WorkImages>
      </WorkWrapper>
    </Wrapper>
  );
};

export default LimonataWork;
