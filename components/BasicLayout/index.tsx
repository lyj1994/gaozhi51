import { FC } from "react";
import { FCWithChildren } from "../../types/common";
import Header from "../Header";

const BasicLayout: FCWithChildren = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default BasicLayout;
