import React from "react";
import { styled } from "styled-components";
import DesireFullFrameVideo from "../../../renders/desire_fulll_frame.mp4";

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

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const DesireVideo = styled.video`
  width: 300px;
`;

const PremiumLuxuryColumn = styled.div`
  background: black;
  width: 70%;
  height: 500px;
  display: flex;
  justify-content: center;
  background: black;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const PremiumLuxuryContent = styled.div`
  display: flex;
  max-width: 80%;
  gap: 50px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 40px auto;
  }
`;

const AdvirtiseColumn = styled.div`
  background: white;
  width: 30%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
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

export const PremiumLuxury = () => {
  return (
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
              Whatever our medium, we’re always design led. Viewing everything
              with a seasoned art director's eye, we understand the aesthetics
              of premium and luxury brands. We eat sleep and breathe your brand
              to ensure your product design and philosophy lives throughout all
              your content.
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
  );
};
