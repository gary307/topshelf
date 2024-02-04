import * as React from "react";
import { styled } from "styled-components";

const GradiantLeft = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, black, transparent);
  z-index: 9;
  opacity: 0.7;

  @media (max-width: 800px) {
    opacity: 0.5;
  }
`;

const GradiantRight = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background: linear-gradient(-90deg, black, transparent);
  z-index: 9;
  right: 0;
  opacity: 0.7;

  @media (max-width: 800px) {
    opacity: 0.5;
  }
`;

export const Gradiant = () => {
  return (
    <>
      <GradiantLeft />
      <GradiantRight />
    </>
  );
};
