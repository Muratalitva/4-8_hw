import React from "react";
import Header from "../../Components/HeaderNav/HeaderNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet />
    </>
  );
};

export default Main;

