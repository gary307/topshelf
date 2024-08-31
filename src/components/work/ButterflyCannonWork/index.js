import * as React from "react";
import { styled } from "styled-components";
import Logo from "../../../images/butter_cannon_logo.svg";
import BackgroundImage from "../../../images/butterfly_cannon_background.png";
import ButterFlyCannonVideo from '../../../videos/butterfly_cannon.mp4';

const Wrapper = styled.div`
  background: url(${BackgroundImage}), #232b30;
  background-blend-mode: multiply;
  background-position: 0px 150px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 20px;
  padding-top: 100px;
  padding-bottom: 180px;

  @media (max-width: 1000px) {
    padding: 0;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-position: 0px 50%;
    background-size: contain;
  }
`;

const WorkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 140px;

  @media (max-width: 1000px) {
    max-width: 700px;
    margin-top: 50px;
  }
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;


const WorkDescription = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 1000px) {
    grid-column: span 8;
    order: 1;
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


const ButterFlyCannonVideoElement = styled.video`
width: 500px;
grid-column: span 4;

  @media (max-width: 1000px) {
      grid-column: span 8;
      width: 100%;
      order: -1;
  }
`;

const ButterflyCannonWork = () => {
  return (
    <Wrapper>
      <WorkTitle>
        <LogoImg src={Logo} alt="Butterfly Logo" />
      </WorkTitle>
      <WorkWrapper>
        <WorkDescription>
          <WorkDescriptionCopy>
            <h2>BUTTERFLY'S JOURNEY</h2>
            <p>
              Premium tequila brand Butterfly Cannon donate to the Monarch Butterfly Conservation Fund – which aims to conserve the magic of the monarch migration.
            </p>
            <p>
              They wanted a way to bring their butterfly mascot to life. These were a set of short animations adapted for escalator screens and instagram posts.
            </p>
          </WorkDescriptionCopy>
        </WorkDescription>
        <ButterFlyCannonVideoElement 
          src={ButterFlyCannonVideo} 
          playsInline 
          autoPlay 
          loop
          controls={false}
          muted
        />
      </WorkWrapper>
    </Wrapper>
  );
};

export default ButterflyCannonWork;
