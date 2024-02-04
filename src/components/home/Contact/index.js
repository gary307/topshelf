import React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import MessageBottleImage from "../../../images/message_in_a_bottle_two.png";

const SaveFluffContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 120px 0 120px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  position: relative;

  background: url(${MessageBottleImage});
  background-size: 1500px;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (max-width: 1000px) {
    padding: 100px 20px 100px 20px;
    flex-direction: column;
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
  // max-width: 400px;
  width: 50%;
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
  letter-spacing: 1px;
  opacity: 0.7;
  font-size: 30px;
`;

export const Contact = () => {
  return (
    <SaveFluffContainer id="contact">
      <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
      <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />

      <SaveFluffRow>
        <SaveFluffColumn>
          <SaveFluffTitle>Lets Chat...</SaveFluffTitle>

          <div>
            <SaveFluffCopy>Email: Chris@topshelf.art</SaveFluffCopy>
            <SaveFluffCopy>No: 07793 057342</SaveFluffCopy>
          </div>
        </SaveFluffColumn>
        <SaveFluffColumn></SaveFluffColumn>
      </SaveFluffRow>
    </SaveFluffContainer>
  );
};
