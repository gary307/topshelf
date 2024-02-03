import * as React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";

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

  @media (max-width: 1000px) {
    letter-spacing: 20px;
    margin-left: 0;
    text-align: center;
    font-size: 40px;
  }
`;

const KissCopy = styled.p`
  max-width: 800px;
  margin: 30px auto 20px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
        sapien vulputate, convallis justo fringilla, vulputate est. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae
      </KissCopy>
    </KissContainer>
  );
};