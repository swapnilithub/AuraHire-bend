import React, { Fragment } from "react";
import Routers from "../../routers/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <Fragment>
        <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;