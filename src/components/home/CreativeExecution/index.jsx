import * as React from "react";
import { styled } from "styled-components";
import ArchWindow from "../../../images/arch_windoe.png";
import CreativeFinal from "../../../renders/creative_final.mp4";
import ProductionVideo from "../../../renders/production.mp4";
import Rings from "../../../images/rings.png";
import Neurons from "../../../images/neurons.png";

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
  padding: 0 40px 70px;
  position: relative;
  box-sizing: border-box;

  background-image: url(${Neurons});

  background-size: 1300px;
  background-position: 200px 0px;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
`;

const ExecutionColumn = styled.div`
  width: 50%;
  background: #262f34;
  position: relative;
  background-image: url(${Rings});
  background-size: 790px;
  background-position: 107px 215px;
  background-repeat: no-repeat;
  box-sizing: border-box;

  @media (max-width: 1250px) {
    background-position: center 350px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CreativeDevContent = styled.div`
  display: flex;
  gap: 0px;
  max-width: 700px;
  margin: 0 auto;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1250px) {
    flex-direction: column;
    margin-left: 0;
    margin: 0 auto;
    align-items: center;
  }
`;

const CreativeDevDetails = styled.p`
  text-align: left;
  max-width: 300px;
  padding-top: 200px;
  z-index: 999;

  @media (max-width: 1250px) {
    margin-top: 0;
    padding-top: 40px;
    // max-width: none;
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    // padding-top: 0;
    margin-bottom: 40px;
  }
`;

const CreativeVideo = styled.video`
  width: 295px;
  margin-left: -20px;
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

const ExecutionContent = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  margin-left: 70px;

  @media (max-width: 1250px) {
    flex-direction: column;
    margin-left: 0;
    max-width: none;
  }
`;

const ExecutionDetails = styled.p`
  text-align: left;
  max-width: 300px;
  z-index: 9999;

  @media (max-width: 1250px) {
    margin: 0 auto;
    max-width: 300px;
  }
`;

const ExecutionVideo = styled.video`
  width: 280px;
  position: absolute;
  top: -7px;
  left: -5px;
`;

const ExecutionVideoContainer = styled.div`
  overflow: hidden;
  width: 300px;
  border-radius: 50%;
  height: 270px;
  width: 270px;
  background: black;
  top: 360px;
  position: relative;

  @media (max-width: 1250px) {
    position: relative;
    top: auto;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 30px;
  }
`;

const ArchWindowImage = styled.img`
  position: absolute;
  top: -28px;
  width: 360px;
  margin-left: -22px;
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

  display: none;

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
  bottom: 80px;
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
  // margin: 0 auto;
  // width: 350px;
  width: 250px;
`;

const CreativeTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 40px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: white;
`;

export const CreativeExecution = () => {
  const creativeVideo = React.useRef(null);

  React.useEffect(() => {
    creativeVideo.current.play();
  }, []);

  return (
    <CreativeContentContainer>
      <CreativeDevColumn>
        <CreativeTitle>CREATIVE</CreativeTitle>
        <CreativeDevTitleContainer>
          <CreativeDevTitle>CREATIVE</CreativeDevTitle>

          <CreativeDevTitleBottom />
        </CreativeDevTitleContainer>
        <CreativeDevContent>
          <ArchWindowCOntainer>
            <ArchWindowImage src={ArchWindow} />
            <CreativeVideo
              ref={creativeVideo}
              src={CreativeFinal}
              loop
              controls={false}
              autoPlay
              playsinline
              muted
            />
          </ArchWindowCOntainer>

          <CreativeDevDetails>
            <o>
              We work with top shelf copywriters, art directors, designers,
              illustrators, animators, directors and cinematographers to deliver
              fresh, innovative thinking and visually mesmerizing content.
              Clients work directly with their lead creative talent, so nothing
              is lost in translation. From primordial brief development to
              expanding existing campaigns across new platforms, we put the best
              brains on the job.
            </o>
          </CreativeDevDetails>
        </CreativeDevContent>
      </CreativeDevColumn>

      <ExecutionColumn>
        <ExecutionTitle>Execution</ExecutionTitle>
        <ExecutionContent>
          <ExecutionDetails>
            <p>
              We handle all stages of production across video, photography,
              design and print. We approach production from a creative
              perspective and ensure the same people are involved from initial
              creative through final delivery, keeping a focus on quality. We
              streamline production as much as possible to stay fast and agile.
            </p>
          </ExecutionDetails>
          <ExecutionVideoContainer>
            <ExecutionVideo
              src={ProductionVideo}
              loop
              controls={false}
              autoPlay
              playsinline
              muted
            />
          </ExecutionVideoContainer>
        </ExecutionContent>
      </ExecutionColumn>
    </CreativeContentContainer>
  );
};
