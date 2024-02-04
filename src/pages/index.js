import * as React from "react";
import Header from "../components/Header";
import { GlobalTemplateStyle } from "../shared/globalTemplateStyle";
import { Hero } from "../components/home/Hero";
import { CreativeExecution } from "../components/home/CreativeExecution";
import { Kiss } from "../components/home/Kiss";
import { SaveTheFluff } from "../components/home/SaveTheFluff";
import { PremiumLuxury } from "../components/home/PremiumLuxury";
import { Contact } from "../components/home/Contact";
import styled from "styled-components";
import { Sustainability } from "../components/home/Sustainability";
import { MeetTheTeam } from "../components/home/MeetTheTeam";

const Wrapper = styled.div``;

const GradiantLeft = styled.div`
  position: fixed;
  width: 30px;
  height: 100vh;
  background: black;
`;

const IndexPage = () => {
  return (
    <Wrapper>
      <GlobalTemplateStyle />
      <Header />
      <Hero />
      <CreativeExecution />
      <PremiumLuxury />
      <Kiss />
      <MeetTheTeam />
      <Sustainability />
      <SaveTheFluff />

      <Contact />
    </Wrapper>
  );
};

export default IndexPage;
