import * as React from "react";
import ShankyWork from "../components/work/ShankyWork";
import HaigWork from "../components/work/HaigWork ";
import MalfyWork from "../components/work/MalfyWork";
import Header from "../components/Header";
import LimonataWork from "../components/work/LimonataWork";
import { GlobalTemplateStyle } from "../shared/globalTemplateStyle";
import { Contact } from "../components/home/Contact";

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Header />
      <ShankyWork />
      <HaigWork />
      <MalfyWork />
      <LimonataWork />
      <Contact />
    </>
  );
};

export default IndexPage;
