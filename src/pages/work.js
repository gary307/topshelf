import * as React from "react";
import ShankyWork from "../components/work/ShankyWork";
import HaigWork from "../components/work/HaigWork ";
import MalfyWork from "../components/work/MalfyWork";
import Header from "../components/Header";
import LimonataWork from "../components/work/LimonataWork";
import PodAndBriar from "../components/work/PodAndBriar";
import ButterflyCannonWork from '../components/work/ButterflyCannonWork';
import { GlobalTemplateStyle } from "../shared/globalTemplateStyle";
import { Contact } from "../components/home/Contact";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
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
      <ShankyWork />
      <HaigWork />
      <MalfyWork />
      <LimonataWork />
      <ButterflyCannonWork />
      <PodAndBriar />
      <Contact />
    </>
  );
};

export default IndexPage;
