import * as React from "react";
import { styled, createGlobalStyle } from "styled-components";
import ShankyWork from "../components/work/ShankyWork";
import HaigWork from "../components/work/HaigWork ";
import MalfyWork from "../components/work/MalfyWork";

const GlobalTemplateStyle = createGlobalStyle`

body {
  font-family: 'Quicksand', arial, sans-serif;
  background: #262121;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Playfair Display', arial, sans-serif;
  color: orange;
}


p {
  font-family: 'Quicksand', arial, sans-serif;
}
`;

const Header = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  font-family: "Playfair Display", arial, sans-serif;
  font-size: 17px;
  letter-spacing: 2px;
  gap: 100px;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalTemplateStyle />
      <Header>
        <StyledNav>
          <HeaderContent>
            <StyledNav>
              <a>Home</a>
              <a>People</a>
              <a>Our work</a>
              <a>Contact</a>
            </StyledNav>
          </HeaderContent>
        </StyledNav>
      </Header>

      <ShankyWork />
      <HaigWork />
      <MalfyWork />
    </>
  );
};

export default IndexPage;
