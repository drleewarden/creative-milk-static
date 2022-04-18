import React, { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

// import Image from "next/image";

import { Card } from "../src/components/card";
import Heading from "../src/components/heading";
import { COMPANIES } from "../src/services/allPlacesWorked";
import styles from "../styles/Home.module.scss";

interface IJobs {
  dates: string;
  technical: string;
  name: string;
  position: string;
  description: string;
  image: string;
  colour: string;
}
const Home: NextPage = () => {
  const [jobs, setJobs] = useState<IJobs[]>(COMPANIES);
  const [allActiveCards, setAllActiveCards] = useState<boolean[]>([]);
  const [activeCard, setActiveCard] = useState(false);
  console.log("companies", COMPANIES);
  const filterArr = (arr: IJobs[], text: string) => {
    return arr.filter((item) => item.name.toLowerCase().includes(text));
  };
  const searchResults = (inputText: string) => {
    const char = filterArr(jobs, inputText);
    setJobs(char);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Darryn lee-warden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,800;1,100&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <Heading classN="cm-container" />
        <div className={styles.grid}>
          {jobs &&
            jobs.map((job: IJobs, index) => {
              return <Card key={index} job={job} ind={index} />;
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Darryn lee-warden - creative milk</p>
      </footer>
    </div>
  );
};

export default Home;
