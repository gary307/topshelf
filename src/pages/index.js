import * as React from "react";
import premium_1 from "../videos/premium_1.mp4";
import { styled, createGlobalStyle } from "styled-components";

const GlobalTemplateStyle = createGlobalStyle`

body {
  font-family: 'Avenir', arial, sans-serif;
  background: black;
  color: white;
}
`;

const VideoContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 590px;
  height: 180px;
  border-radius: 500px;
  position: relative;
`;

const StyledVideo = styled.video`
  margin-top: -147px;
  margin-left: -30px;
  position: absolute;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  color: "#232129",
  padding: 96,
  font-family: arial;
`;

const ModuleContainer = styled.div`
  display: flex;
  gap: 50px;
  margin: 100px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ModuleColumn = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Wrapper>
        <ModuleContainer>
          <ModuleColumn>
            <h2>Title</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis odio et vestibulum tempus. Fusce orci eros, finibus at
              mi non, tristique porta ipsum. Aenean non ligula imperdiet,
              gravida diam vulputate, tincidunt tellus. Morbi ex lorem, placerat
              sed lorem nec, luctus luctus nulla. Aliquam tempor ante nisi, at
              imperdiet dui ultrices eget
            </p>
          </ModuleColumn>

          <ModuleColumn>
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
          </ModuleColumn>
        </ModuleContainer>

        <ModuleContainer>
          <ModuleColumn>
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
          </ModuleColumn>

          <ModuleColumn>
            <h2>Title</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis odio et vestibulum tempus. Fusce orci eros, finibus at
              mi non, tristique porta ipsum. Aenean non ligula imperdiet,
              gravida diam vulputate, tincidunt tellus. Morbi ex lorem, placerat
              sed lorem nec, luctus luctus nulla. Aliquam tempor ante nisi, at
              imperdiet dui ultrices eget
            </p>
          </ModuleColumn>
        </ModuleContainer>
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
