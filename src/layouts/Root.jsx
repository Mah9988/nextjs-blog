import Header from "@/components/Header";
import React from "react";

const Root = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Root;
