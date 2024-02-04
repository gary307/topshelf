import React from "react";
import { Link } from "gatsby";
import { styled } from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  z-index: 999;
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

  @media (max-width: 800px) {
    gap: 30px;
    font-size: 13px;
  }

  a,
  a:visited {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledNav>
        <HeaderContent>
          <StyledNav>
            <Link to="/">Home</Link>
            <Link to="/#people">People</Link>
            <Link to="/work">Work</Link>
            <Link to="#contact">Contact</Link>
          </StyledNav>
        </HeaderContent>
      </StyledNav>
    </HeaderWrapper>
  );
};

export default Header;
