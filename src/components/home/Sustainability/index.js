import React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import MessageBottleImage from "../../../images/message_in_a_bottle_two.png";
import SustainFrame from "../../../images/sustain_frame.png";
import SustainVideo from "../../../renders/sustainable_final.mp4";

const SaveFluffContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 0 40px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  background: #df9c5a;

  @media (max-width: 1000px) {
    padding: 100px 20px 100px 20px;
    flex-direction: column-reverse;
  }
`;

const CrossHairImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: 0.3;
`;

const SaveFluffRow = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const SaveFluffColumn = styled.div`
  text-align: center;
  width: 50%;

  padding: 120px 0;

  @media (max-width: 1000px) {
    padding: 0;
    width: 100%;
  }
`;

const ContentColumn = styled.div`
  text-align: center;
  width: 50%;
  z-index: 999;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 400px;
  }
`;

const SaveFluffTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 35px;

  color: #9d7044;

  @media (max-width: 800px) {
    font-szie: 30px;
  }
`;

const SaveFluffCopy = styled.p`
  letter-spacing: 1px;
  opacity: 0.7;
  // font-size: 30px;
  color: #9d7044;
`;

const SutainVideoContainer = styled.div`
  height: 423px;
`;

const SustainImageContainer = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1;
  width: 50%;
  overflow: hidden;

  @media (max-width: 1000px) {
    display: none;
    width: 100%;
    top: 0;
    right: auto;
    left: 0;
  }
`;

const SustainFrameImage = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1;
`;

const SustainVideoPLayer = styled.video`
  width: 302px;
  position: absolute;
  right: 201px;
  top: 119px;

  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    right: auto;
  }
`;

export const Sustainability = () => {
  return (
    <SaveFluffContainer>
      <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />

      <SaveFluffRow>
        <ContentColumn>
          <SaveFluffTitle>SUSTAINABLE PRODUCTION</SaveFluffTitle>

          <div>
            <SaveFluffCopy>
              Capture your brand in exotic locations without the carbon
              footprint. We have access to high-end virtual production
              facilities meaning we can create any environment. From sunset in
              the Maldives to fully abstract fantasy worlds, if we can imagine a
              place, we can shoot there, without leaving our studio. Unlimited,
              controllable environments.
            </SaveFluffCopy>
          </div>
        </ContentColumn>
        <SaveFluffColumn>
          <SutainVideoContainer>
            <SustainImageContainer>
              <SustainFrameImage src={SustainFrame} />
            </SustainImageContainer>
            <SustainVideoPLayer
              src={SustainVideo}
              loop
              controls={false}
              autoPlay
              muted
            />
          </SutainVideoContainer>
        </SaveFluffColumn>
      </SaveFluffRow>
    </SaveFluffContainer>
  );
};
