import * as React from "react";
import ShankyWork from "../components/work/ShankyWork";
import HaigWork from "../components/work/HaigWork ";
import MalfyWork from "../components/work/MalfyWork";
import Header from "../components/Header";
import { GlobalTemplateStyle } from "../shared/globalTemplateStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Header />
      <ShankyWork />
      <HaigWork />
      <MalfyWork />
    </>
  );
};

export default IndexPage;
