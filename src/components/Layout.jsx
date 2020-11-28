import React from "react";
import "normalize.css";
import styled from "styled-components";

import stripes from "../assets/images/stripes.svg";

import Navigation from "./Navigation";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const StyledContent = styled.div`
  background-color: white;
  padding: 2rem;
`;

const StyledContentWrapper = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  //margin-top: clamp(2rem , 10vh, 12rem);
  background-color: white;
  background-image: url(${stripes});
  background-size: 150rem;
  padding: 5px;
  padding: clamp(5px, 1vh, 25px);
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);

  @media(max-width: 110px) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
`;

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <GlobalStyles/>
      <Typography/>

      <StyledContentWrapper>
        <StyledContent>
          <Navigation/>
          {children}
          <Footer/>
        </StyledContent>
      </StyledContentWrapper>
    </>
  );
};

export default Layout;
