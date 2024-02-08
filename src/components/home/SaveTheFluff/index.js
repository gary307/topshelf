import React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import ClarityOverFluffVideo from "../../../renders/clarity_over_fluff_final.mp4";
import DesireFullFrameVideo from "../../../renders/desire_fulll_frame.mp4";
import Flowers from "../../../images/flowers.png";
import { Gradiant } from "../../../shared/Gradiant";

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
  background-blend-mode: soft-light;
  background-color: #38454d;

  @media (max-width: 1000px) {
    padding: 100px 20px 100px 20px;
    flex-direction: column;
    background-size: 800px;
    // background-repeat: no-repeat;
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
  z-index: 999;

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

const SaveFluffTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 35px;

  @media (max-width: 800px) {
    font-szie: 30px;
  }
`;

const SaveFluffCopy = styled.p`
  @media (max-width: 800px) {
    // font-size: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const SaveTheFluff = () => {
  return (
    <Wrapper>
      <Gradiant />
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
              playsInline
            />
          </SaveFluffColumn>
          <SaveFluffColumn>
            <SaveFluffTitle>KEEPING IT REAL</SaveFluffTitle>

            <div>
              <SaveFluffCopy>
                We’re not about disposable social fodder, fluffy marketing lingo
                or meaningless analytics. We use a healthy balance of data
                informed creative strategy and talented human minds to deliver
                clear and effective branded content that truly connects with its
                audience.
              </SaveFluffCopy>
            </div>
          </SaveFluffColumn>
        </SaveFluffRow>
      </SaveFluffContainer>
    </Wrapper>
  );
};
