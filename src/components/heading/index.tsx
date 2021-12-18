import React, { useState } from "react";
import Link from "next/link";
import InputSelect from "../../../src/components/search";
import { COMPANIES } from "../../../src/services/allPlacesWorked";
import styles from "./Heading.module.scss";
import { Title } from "../../../styles/styles";
interface IJobs {
  dates: string;
  technical: string;
  name: string;
  position: string;
  description: string;
  image: string;
  colour: string;
}
const Heading: React.FC = () => {
  const [jobs, setJobs] = useState<IJobs[]>(COMPANIES);

  const filterArr = (arr: IJobs[], text: string) => {
    return arr.filter((item) => item.name.toLowerCase().includes(text));
  };
  const clear = () => {
    // setJobs(allActiveCards);
  };
  const searchResults = (inputText: string) => {
    const char = filterArr(jobs, inputText);
    setJobs(char);
  };
  return (
    <>
      <Title>Creative Milk</Title>
      <InputSelect inputSearchList={searchResults} clear={clear} />
      <Link href="/about">
        <a className={styles.nav__item}>About Me</a>
      </Link>
    </>
  );
};
export default Heading;
