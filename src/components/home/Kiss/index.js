import * as React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair_orange.png";

const KissContainer = styled.div`
  width: 100%;
  padding: 40px;
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

  @media (max-width: 1000px) {
    letter-spacing: 20px;
    margin-left: 0;
    text-align: center;
    font-size: 40px;
  }
`;

const KissCopy = styled.h3`
  max-width: 90%;
  margin: 50px auto 20px;
  font-size: 25px;
  // font-weight: 300;
  line-height: 1.5;
  color: #9d7044;
`;

const CrossHairImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  @media (max-width: 800px) {
    width: 20px;
  }
`;

export const Kiss = () => {
  return (
    <KissContainer>
      <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />
      <KissTitle>KISS</KissTitle>

      <KissCopy>
        We streamline the process to ensure as much budget as possible goes on
        the screen. Clients work directly with creative talent. No waste.
        Nothing lost in translation.
      </KissCopy>
    </KissContainer>
  );
};
