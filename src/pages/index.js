import * as React from "react";
import Header from "../components/Header";
import { GlobalTemplateStyle } from "../shared/globalTemplateStyle";
import { Hero } from "../components/home/Hero";
import { CreativeExecution } from "../components/home/CreativeExecution";
import { Kiss } from "../components/home/Kiss";
import { SaveTheFluff } from "../components/home/SaveTheFluff";
import { PremiumLuxury } from "../components/home/PremiumLuxury";

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Header />
      <Hero />
      <CreativeExecution />
      <PremiumLuxury />
      <Kiss />
      <SaveTheFluff />
    </>
  );
};

export default IndexPage;
