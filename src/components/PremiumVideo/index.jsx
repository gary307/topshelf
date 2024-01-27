
import * as React from "react";
import premium_1 from "../../videos/premium_1.mp4";
import { styled  } from "styled-components";
 
 const VideoContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 590px;
    height: 180px;
    border-radius: 500px;
    position: relative;

    @media (max-width: 1200px) {
    width: 395px;
    height: 90px;
    }
`;

const StyledVideo = styled.video`
 margin-top: -147px;
 margin-left: -30px;
 position: absolute;

 @media (max-width: 1200px) {
   width: 114%;
   margin-top: -200px;
 }
`;
 
 export const PremiumVideo = () => {
  return (
    <VideoContainer>
    <StyledVideo
      width="640"
      height="480"
      controls={false}
      src={premium_1}
      loop

      autoPlay
      muted
    />
  </VideoContainer>
  );
};

