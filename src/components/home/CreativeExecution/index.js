import * as React from "react";
import { styled } from "styled-components";
import ArchWindow from "../../../images/arch_windoe.png";
import CreativeFinal from "../../../renders/creative_final.mp4";
import ProductionVideo from "../../../renders/production.mp4";
import Rings from "../../../images/rings.png";

const CreativeContentContainer = styled.div`
  background: #e3a062;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CreativeDevColumn = styled.div`
  width: 50%;
  background: #df9c5a;
  padding: 0 50px 50px;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

const ExecutionColumn = styled.div`
  width: 50%;
  background: #262f34;
  position: relative;
  background-image: url(${Rings});
  background-size: 790px;
  background-position: 30px 130px;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    width: 100%;
    background-position: 130px 130px;
  }
`;

const CreativeDevContent = styled.div`
  display: flex;
  gap: 0px;
  max-width: 700px;
  margin: 0 auto;
  margin-left: 10%;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0;
    margin: 0 auto;
  }
`;

const CreativeDevDetails = styled.p`
  text-align: left;
  max-width: 300px;
  padding-top: 200px;
  z-index: 999;

  @media (max-width: 800px) {
    margin: 0 auto;
    padding-top: 0;
    margin-bottom: 40px;
  }
`;

const CreativeVideo = styled.video`
  width: 85%;
  margin-top: 90px;
  @media (max-width: 800px) {
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const ExecutionContent = styled.div`
  display: flex;
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
  margin-left: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const ExecutionDetails = styled.p`
  text-align: left;
  max-width: 300px;
  z-index: 9999;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const ExecutionVideo = styled.video`
  width: 280px;
  position: absolute;
  top: -15px;
  left: -10px;
`;

const ExecutionVideoContainer = styled.div`
  overflow: hidden;
  width: 300px;
  margin-left: -100px;
  border-radius: 50%;
  height: 260px;
  width: 260px;
  background: black;
  top: 280px;
  position: relative;

  @media (max-width: 800px) {
    position: relative;
    top: auto;
    margin: 0 auto;

    margin-bottom: 40px;
  }
`;

const ArchWindowImage = styled.img`
  position: absolute;
  //   width: 365px;
  top: 65px;
  width: 103%;

  @media (max-width: 800px) {
    top: 0;
  }
`;

const ExecutionTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 40px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

const CreativeDevTitleContainer = styled.div`
  position: absolute;
  height: 100%;
  background: white;
  top: 0;
  left: 0;
  width: 100px;
  z-index: 999;

  @media (max-width: 800px) {
    position: relative;
    width: 100%;
  }
`;

const CreativeDevTitle = styled.h2`
  position: absolute;
  width: 800px;
  font-size: 40px;
  letter-spacing: 10px;
  bottom: 40px;
  transform-origin: 0 0;
  letter-spacing: 10px;
  transform: rotate(-90deg);
  text-transform: uppercase;
  left: 20px;

  @media (max-width: 800px) {
    transform: none;
    position: relative;
    width: 100%;
    font-size: 30px;
    margin-top:10px;
    bottom: auto;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    left: auto
  }
}
`;

const CreativeDevTitleBottom = styled.div`
  background: white;
  height: 80px;
  width: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;

  @media (max-width: 800px) {
    display: none;
  }
`;

const ArchWindowCOntainer = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 350px;

  @media (max-width: 1450px) {
    width: 250px;
  }
`;

export const CreativeExecution = () => {
  return (
    <CreativeContentContainer>
      <CreativeDevColumn>
        <CreativeDevTitleContainer>
          <CreativeDevTitle>Creative Dev</CreativeDevTitle>

          {/* <CreativeDevTitleMobile>Creative Dev</CreativeDevTitle> */}

          <CreativeDevTitleBottom />
        </CreativeDevTitleContainer>
        <CreativeDevContent>
          <ArchWindowCOntainer>
            <ArchWindowImage src={ArchWindow} />
            <CreativeVideo
              src={CreativeFinal}
              loop
              controls={false}
              autoPlay
              muted
            />
          </ArchWindowCOntainer>

          <CreativeDevDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque et sapien vulputate. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quisque et sapien
              vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque et sapien vulputate. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque et sapien vulputate. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
              sapien vulputate.
            </p>
          </CreativeDevDetails>
        </CreativeDevContent>
      </CreativeDevColumn>

      <ExecutionColumn>
        <ExecutionTitle>Execution</ExecutionTitle>
        <ExecutionContent>
          <ExecutionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque et sapien vulputate. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quisque et sapien
              vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque et sapien vulputate. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque et sapien vulputate. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
              sapien vulputate.
            </p>
          </ExecutionDetails>
          <ExecutionVideoContainer>
            <ExecutionVideo
              src={ProductionVideo}
              loop
              controls={false}
              autoPlay
              muted
            />
          </ExecutionVideoContainer>
        </ExecutionContent>
      </ExecutionColumn>
    </CreativeContentContainer>
  );
};
