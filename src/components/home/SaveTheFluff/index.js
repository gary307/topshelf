import React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import ClarityOverFluffVideo from "../../../renders/clarity_over_fluff_final.mp4";
import DesireFullFrameVideo from "../../../renders/desire_fulll_frame.mp4";
import Flowers from "../../../images/flowers.png";

const SaveFluffContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 200px 0 200px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  background: #38454d;
  position: relative;
  background-image: url(${Flowers});
  background-size: contain;
  backgrund-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
  background-color: #38454d;

  @media (max-width: 1000px) {
    padding: 100px 0 100px 0;
    flex-direction: column;
  }
`;

const CrossHairImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const SaveFluffRow = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const SaveFluffColumn = styled.div`
  text-align: center;
  max-width: 400px;
`;

const FluffVideo = styled.video`
  width: 400px;

  @media (max-width: 1000px) {
    width: 300px;
  }
`;

const DesireVideo = styled.video`
  width: 300px;
`;

const SaveFluffTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
`;

const SaveFluffCopy = styled.p`
  font-size: 26px;
  font-weight: 300;
`;

export const SaveTheFluff = () => {
  return (
    <SaveFluffContainer>
      <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />

      <SaveFluffRow>
        <SaveFluffColumn>
          <FluffVideo
            src={ClarityOverFluffVideo}
            loop
            controls={false}
            autoPlay
            muted
          />
        </SaveFluffColumn>
        <SaveFluffColumn>
          <SaveFluffTitle>Save the fluff</SaveFluffTitle>

          <div>
            <SaveFluffCopy>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque et sapien vulputate.
            </SaveFluffCopy>
          </div>
        </SaveFluffColumn>
      </SaveFluffRow>
    </SaveFluffContainer>
  );
};
