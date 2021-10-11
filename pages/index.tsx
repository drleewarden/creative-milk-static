import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Title } from "./styles";

import React, { useState } from "react";
import InputSelect from "../src/components/search";
import { COMPANIES } from "../src/services/allPlacesWorked";
import { Card } from "../src/components/card";

interface IJobs {
  dates: string;
  technical: string;
  name: string;
  position: string;
  description: string;
  image: string;
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
  const clear = () => {
    setJobs(allActiveCards);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Darryn lee-warden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>Creative Milk</Title>
        <InputSelect inputSearchList={searchResults} clear={clear} />
        <div className={styles.grid}>
          {jobs &&
            jobs.map((job: IJobs, index) => {
              return <Card key={index} job={job} ind={index} />;
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Darryn lee-warden</p>
      </footer>
    </div>
  );
};

export default Home;
