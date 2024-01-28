import * as React from "react";
import { styled, createGlobalStyle } from "styled-components";
import { PremiumVideo } from "../components/premiumVideo";
import Logo from "../images/logo.png";
import Flowers from "../images/flowers.png";
import CrossHair from "../images/crosshair.png";
import ClarityOverFluffVideo from "../renders/clarity_over_fluff_final.mp4";
import DesireFullFrameVideo from "../renders/desire_fulll_frame.mp4";
import CreativeFinal from "../renders/creative_final.mp4";
import ProductionVideo from "../renders/production.mp4";
import ArchWindow from "../images/arch_windoe.png";
import Rings from "../images/rings.png";
import HeroVideo from "../renders/reel_2018.mp4";

const GlobalTemplateStyle = createGlobalStyle`

body {
  font-family: 'Quicksand', arial, sans-serif;
  background: #262121;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Playfair Display', arial, sans-serif;
  color: orange;
}


p {
  font-family: 'Quicksand', arial, sans-serif;
}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  color: "#232129",
  padding: 96,
  font-family: arial;
`;

const ModuleContainer = styled.div`
  display: flex;
  gap: 50px;
  margin: 100px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 250px 0 200px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  background: #555555;
  position: relative;
  background-image: url(${Flowers});
  background-size: contain;
  backgrund-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
  background-color: #38454d;
`;

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
`;

const ModuleColumn = styled.div`
  width: 50%;
  box-sizing: border-box;

  ${(props) => `
    text-align: ${props.align || "left"};
    justify-content: ${props.align || "left"};
  `}
`;

const HeroColumn = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const Header = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  font-family: "Playfair Display", arial, sans-serif;
  font-size: 17px;
  letter-spacing: 2px;
  gap: 100px;
`;

const HeroVideoWrapper = styled.div`
  video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  width: 100%;
  bottom: 65%;

  img {
    @media (max-width: 800px) {
      width: 300px;
    }
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
`;

const SaveFluffColumn = styled.div`
  text-align: center;
  max-width: 400px;
`;

const FluffVideo = styled.video`
  width: 400px;
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
  // font-family: "Playfair Display", arial, sans-serif;
  font-size: 26px;
  font-weight: 300;
`;

const KissContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #fd9c5a;
  color: #9d7044;
  text-align: center;
  box-sizing: border-box;
  position: relative;
`;

const KissTitle = styled.h2`
  font-size: 50px;
  color: #9d7044;
  margin: 0;
  letter-spacing: 200px;
  margin-left: 200px;
`;

const KissCopy = styled.p`
  max-width: 800px;
  margin: 30px auto 20px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
`;

const PremiumLuxuryContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #fd9c5a;
  color: #9d7044;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  padding: 0;
  display: flex;
`;

const PremiumLuxuryColumn = styled.div`
  background: black;
  width: 70%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const PremiumLuxuryContent = styled.div`
  display: flex;
  max-width: 80%;
  gap: 50px;
  align-items: center;
`;

const AdvirtiseColumn = styled.div`
  background: white;
  width: 30%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AdvirtiseTitle = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
`;

const AdvirtiseList = styled.ul`
  text-transform: uppercase;
  list-style: none;
  padding: 0;
  margin: 0;

  & li {
    margin: 0 0 20px;
    font-size: 25px;
    font-family: "Playfair Display", arial, sans-serif;
    letter-spacing: 10px;
    font-weight: 500;
  }
`;

const DesireContent = styled.div`
  text-align: left;
  max-width: 400px;
`;
const DesireTitle = styled.h2`
  font-size: 45px;
`;

const DesireCopy = styled.p`
  color: white;
`;

const CreativeContentContainer = styled.div`
  background: #e3a062;
  display: flex;
`;

const CreativeDevColumn = styled.div`
  width: 50%;
  background: #df9c5a;
  padding: 0 50px 50px;
  position: relative;
`;

const ExecutionColumn = styled.div`
  width: 50%;
  background: #262f34;
  position: relative;
  background-image: url(${Rings});
  background-size: 790px;
  background-position: 30px 130px;
  background-repeat: no-repeat;
`;

const CreativeDevContent = styled.div`
  display: flex;
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
  margin-left: 100px;
`;

const CreativeDevDetails = styled.p`
  text-align: left;
  max-width: 300px;
  padding-top: 200px;
  z-index: 999;
`;

const CreativeVideo = styled.video`
  width: 300px;
`;

const ExecutionContent = styled.div`
  display: flex;
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
  margin-left: 50px;
`;

const ExecutionDetails = styled.p`
  text-align: left;
  max-width: 300px;
  z-index: 9999;
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
`;

const ArchWindowImage = styled.img`
  position: absolute;
  width: 365px;
  top: 65px;
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
`;

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Header>
        <StyledNav>
          <HeaderContent>
            <StyledNav>
              <a>Home</a>
              <a>People</a>
              <a>Our work</a>
              <a>Contact</a>
            </StyledNav>
          </HeaderContent>
        </StyledNav>
      </Header>

      <HeroVideoWrapper>
        <video
          autoPlay
          loop
          muted
          // src="https://www.w3schools.com/html/mov_bbb.mp4"
          src={HeroVideo}
        >
          <p>Description of the video...</p>
        </video>
      </HeroVideoWrapper>

      <HeroContainer>
        <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <HeroColumn>
          <HeroTitle>TOP SHELF IS...</HeroTitle>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate, convallis justo fringilla, vulputate est.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In libero elit, fermentum ac turpis in,
              convallis feugiat tortor. Cras in massa metus. Morbi pretium justo
              quis felis luctus posuere. Sed nec nibh vitae augue gravida
              tincidunt fringilla quis mi. Ut ultrices maximus diam, lobortis
              fermentum erat ultrices eget.
            </p>
          </div>
        </HeroColumn>
      </HeroContainer>

      <CreativeContentContainer>
        <CreativeDevColumn>
          <CreativeDevTitleContainer>
            <CreativeDevTitle>Creative Dev</CreativeDevTitle>

            <CreativeDevTitleBottom />
          </CreativeDevTitleContainer>
          <CreativeDevContent>
            <ArchWindowImage src={ArchWindow} />
            <CreativeVideo
              src={CreativeFinal}
              loop
              controls={false}
              autoPlay
              muted
            />

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

      <PremiumLuxuryContainer>
        <PremiumLuxuryColumn>
          <PremiumLuxuryContent>
            <DesireVideo
              src={DesireFullFrameVideo}
              loop
              controls={false}
              autoPlay
              muted
            />

            <DesireContent>
              <DesireTitle>Premium & Luxury</DesireTitle>

              <DesireCopy>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                et sapien vulputate. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque et sapien vulputate.
              </DesireCopy>
            </DesireContent>
          </PremiumLuxuryContent>
        </PremiumLuxuryColumn>

        <AdvirtiseColumn>
          <AdvirtiseTitle>Don't</AdvirtiseTitle>

          <AdvirtiseList>
            <li>Advertise</li>
          </AdvirtiseList>

          <AdvirtiseTitle>Instead</AdvirtiseTitle>

          <AdvirtiseList>
            <li>Adervtain</li>
            <li>Aducate</li>
            <li>Addlighten</li>
          </AdvirtiseList>
        </AdvirtiseColumn>
      </PremiumLuxuryContainer>

      <KissContainer>
        <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />
        <KissTitle>KISS</KissTitle>

        <KissCopy>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          sapien vulputate, convallis justo fringilla, vulputate est. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae
        </KissCopy>
      </KissContainer>

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

      <Wrapper>
        <ModuleContainer>
          <ModuleColumn>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis odio et vestibulum tempus. Fusce orci eros, finibus at
              mi non, tristique porta ipsum. Aenean non ligula imperdiet,
              gravida diam vulputate, tincidunt tellus. Morbi ex lorem, placerat
              sed lorem nec, luctus luctus nulla. Aliquam tempor ante nisi, at
              imperdiet dui ultrices eget
            </p>
          </ModuleColumn>

          <ModuleColumn>
            <PremiumVideo loop controls={false} autoPlay muted />
          </ModuleColumn>
        </ModuleContainer>
      </Wrapper>
    </>
  );
};

export default IndexPage;
