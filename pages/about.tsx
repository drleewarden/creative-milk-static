import React from "react";

import type { NextPage } from "next";

import BaseTemplate from "@/components/template";

import Heading from "../src/components/heading";
import Typography from "../src/components/typography";
import styles from "../styles/Home.module.scss";

// import Nav from "../src/components/nav";

const About: NextPage = () => {
  // const downloadAction = () => {};
  return (
    <div>
      <main className={styles.main}>
        <Heading classN="cm-container" />
      </main>
      <div className="container">
        {/* <Nav download={downloadAction()} /> */}
        <Typography styleType="xl" as="h1" text={""}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Typography>
      </div>
    </div>
  );
};

export default About;
