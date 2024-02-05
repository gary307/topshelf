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
import { Helmet } from "react-helmet";

const Wrapper = styled.div``;

const IndexPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Shelf</title>
        <link rel="canonical" href="http://www.topshelf.art" />
        <meta
          name="description"
          content="A one-stop creative production shop. From primordial creative development through to all stages of production"
        />
      </Helmet>
      <GlobalTemplateStyle />
      <Header />
      <Hero />
      <CreativeExecution />
      <PremiumLuxury />
      <Kiss />
      <SaveTheFluff />
      <Sustainability />
      <MeetTheTeam />
      <Contact />
    </Wrapper>
  );
};

export default IndexPage;
