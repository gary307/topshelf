import * as React from "react";
import { styled, createGlobalStyle } from "styled-components";
import { PremiumVideo } from "../components/premiumVideo";
import Logo from "../images/logo.png";

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

const HeroContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 150px 0 100px 0;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  background: #555555;
  position: relative;
`;

const ModuleColumn = styled.div`
  width: 50%;
  box-sizing: border-box;

  ${(props) => `
    text-align: ${props.align || "left"};
    justify-content: ${props.align || "left"};
  `}
`;

const HeroColumn = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
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
  justify-content: space-between;
  width: 100%;
  font-family: "Playfair Display", arial, sans-serif;
  font-size: 17px;
  letter-spacing: 2px;
`;

const HeroVideoWrapper = styled.div`
  video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  width: 100%;
  bottom: 75%;

  .img {
    width: 30%;
  }
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

      <HeroVideoWrapper>
        <video
          autoPlay
          loop
          muted
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </HeroVideoWrapper>

      <HeroContainer>
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <HeroColumn>
          <HeroTitle>TOP SHELF IS...</HeroTitle>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et sapien vulputate, convallis justo fringilla, vulputate est.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In libero elit, fermentum ac turpis in,
              convallis feugiat tortor. Cras in massa metus. Morbi pretium justo
              quis felis luctus posuere. Sed nec nibh vitae augue gravida
              tincidunt fringilla quis mi. Ut ultrices maximus diam, lobortis
              fermentum erat ultrices eget.
            </p>
          </div>
        </HeroColumn>
      </HeroContainer>
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
            <PremiumVideo />
          </ModuleColumn>
        </ModuleContainer>

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
            <PremiumVideo />
          </ModuleColumn>
        </ModuleContainer>

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
            <PremiumVideo />
          </ModuleColumn>
        </ModuleContainer>
      </Wrapper>
    </>
  );
};

export default IndexPage;
