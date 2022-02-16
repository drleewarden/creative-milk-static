import React, { useState } from "react";
// import style from "/Typography.modules.scss";
interface IProps {
  as: string;
  text: string;
  styleType: string;
}
const Typography: React.FC<IProps> = ({ as, text, styleType, children }) => {
  const Type = () => {
    if (as === "h1") {
      return <h1 className={styleType}>{text}</h1>;
    }
    return <></>;
  };
  return (
    <>
      <Type />
      {children}
    </>
  );
};

export default Typography;
