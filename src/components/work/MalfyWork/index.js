import * as React from "react";
import { styled } from "styled-components";
import MalfyLogo from "../../../images/malfy_logo.png";
import AmalfiCoastImg from "../../../images/amalfi_coast.png";
import MalfyPicOne from "../../../images/malfy_pic_1.jpg";
import MalfyPicTwo from "../../../images/malfy_pic_2.jpg";

const HaigWrapper = styled.div`
  background: url(${AmalfiCoastImg}), #333;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
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
    height: 250px;
  }
`;

const WorkImage = styled.img`
  grid-column: span 3;
  width: 100%;
  object-fit: cover;
  height: 229px;
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

const MalfyLogoImg = styled.img`
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

const MalfyWork = () => {
  return (
    <HaigWrapper>
      <WorkTitle>
        <MalfyLogoImg src={MalfyLogo} alt="ShankyLogo" />
      </WorkTitle>
      <WorkWrapper>
        <WorkVideoAndDescription>
          <YoutubeIframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/984DCHNX94s?si=B_iVyMmugF38zwZO?color=white"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></YoutubeIframe>

          <WorkDescription>
            <WorkDescriptionCopy>
              <h2>Malfy Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                et sapien vulputate, convallis justo fringilla, vulputate est.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; In libero elit, fermentum ac turpis in,
                convallis feugiat tortor. Cras in massa metus. Morbi pretium
                justo
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
        </WorkVideoAndDescription>

        <WorkImages>
          <WorkImage src={MalfyPicOne} alt="Shankydrink" />
          <WorkImage src={MalfyPicTwo} alt="Shankydrink" />
        </WorkImages>
      </WorkWrapper>
    </HaigWrapper>
  );
};

export default MalfyWork;
