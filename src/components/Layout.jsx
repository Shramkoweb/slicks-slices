import React from "react";
import "normalize.css";

import Navigation from "./Navigation";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <GlobalStyles/>

      <Navigation/>

      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
