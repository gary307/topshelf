import React from "react";
import { styled } from "styled-components";
import CrossHair from "../../../images/crosshair.png";
import { Gradiant } from "../../../shared/Gradiant";
import GeraldineProfile from "../../../images/geraldineProfilePic.png";

const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 100px 20px 100px 20px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  background: #38454d;
  position: relative;
  background-size: contain;
  backgrund-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
  background-blend-mode: soft-light;
  background-color: #38454d;

  @media (max-width: 1400px) {
    padding: 100px 20px 150px 170px;
  }

  @media (max-width: 1100px) {
    padding: 100px 20px 100px 20px;
    flex-direction: column;
    background-size: 800px;
  }
`;

const CrossHairImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: 999;
`;

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  z-index: 999;
`;

const Row = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 70px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  text-align: ${(props) => (props.reverse ? "left" : "right")};

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: left;
    gap: 40px;
  }
`;

const ProfileTitle = styled.h2`
  font-size: 30px;
`;
const ProfileCopy = styled.p``;

const Column = styled.div`
  display: flex;
  justify-content: ${(props) => (props.reverse ? "left" : "right")};

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 400px;

  @media (max-width: 700px) {
    width: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  z-index: 999;
  position: relative;
`;

const ProfilImageBorder = styled.div`
  position: absolute;
  width: 70%;
  height: 375px;
  border: 2px solid #df9c5a;
  z-index: 0;
  background: transparent;
  box-shadow: inset 0px 0 20px 2px #df9c5a, 0px 0 20px 2px #df9c5a;

  ${(props) =>
    props.reverse &&
    `right: 0;
  `}

  @media (max-width: 1100px) {
    right: auto;
  }

  @media (max-width: 700px) {
    height: 280px;
  }
`;

const ProfileHeader = styled.h3``;

const Details = styled.div`
  width: 100%;

  @media (max-width: 1100px) {
    max-width: 500px;
  }
`;

const MeetTeamTitle = styled.h2`
  position: absolute;
  z-index: 999;
  transform: rotate(-90deg);
  /* top: 0; */
  bottom: 50%;
  font-size: 80px;
  line-height: 0;
  left: 0;
  letter-spacing: 50px;
  margin-left: -230px;

  &:before {
    content: "";
    width: 30px;
    height: 5px;
    background: #ff8400;
    display: block;
    margin-left: -80px;
    /* margin-top: 20px; */
    position: absolute;
  }

  &:after {
    content: "";
    width: 30px;
    height: 5px;
    background: #ff8400;
    display: block;
    margin-left: -80px;
    position: absolute;
    right: -30px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MeetTeamTitleMobile = styled.h2`
  font-size: 36px;
  letter-spacing: 8px;
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const MeetTheTeam = () => {
  return (
    <Wrapper id="meet-the-team">
      <Gradiant />

      <MeetTeamTitle>People</MeetTeamTitle>

      <Container>
        <CrossHairImage top={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage top={"20px"} right={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} left={"20px"} src={CrossHair} />
        <CrossHairImage bottom={"20px"} right={"20px"} src={CrossHair} />

        <MeetTeamTitleMobile>People</MeetTeamTitleMobile>

        <Content>
          <Row>
            <Column>
              <Details>
                <ProfileTitle>CHRIS BUTLER</ProfileTitle>

                <ProfileHeader>Chris started his career…</ProfileHeader>
                <ProfileCopy>
                  Chris started his career… as an ad man, working at London’s
                  top London creative agencies, collaborating with top
                  photographers, illustrators and directors to create high
                  quality content for some of the world's biggest brands.
                  Through his career Chris has been an accomplished creative,
                  art director, writer and film director, making him a powerful
                  brand storyteller. Chris founded Top Shelf through his love of
                  beverage brands, their high aesthetic, product design and
                  unique brand stories.
                </ProfileCopy>
              </Details>
            </Column>
            <Column>
              <ProfileImageContainer>
                <ProfilImageBorder />
                <ProfileImage src={GeraldineProfile} />
              </ProfileImageContainer>
            </Column>
          </Row>

          <Row reverse>
            <Column reverse>
              <Details>
                <ProfileTitle>GERALDINE CABENARO</ProfileTitle>

                <ProfileHeader>For 15 years…</ProfileHeader>

                <ProfileCopy>
                  …Geraldine has worked across broadcast, commercials, branded
                  content, and even feature films. Starting out in broadcast,
                  she worked with ITN, ITV, C4, C5, coordinating crewing for
                  national live broadcasts as well as coverage for major
                  national events such as the 2012 Olympics, the royal weddings,
                  and the Queen’s Jubilee. Geraldine has produced award-winning
                  branded content for a diverse range of clients across retail,
                  finance, fashion, health and wellness, and charities,
                  including well-known consumer brands such as Amazon, Bayer,
                  Costa, Elvie, HSBC, L’Oreal, Nike, Marie Claire, Meta, and
                  Tripadvisor. She is passionate about production in all its
                  forms.
                </ProfileCopy>
              </Details>
            </Column>
            <Column>
              <ProfileImageContainer>
                <ProfilImageBorder reverse />
                <ProfileImage reverse src={GeraldineProfile} />
              </ProfileImageContainer>
            </Column>
          </Row>
        </Content>
      </Container>
    </Wrapper>
  );
};
