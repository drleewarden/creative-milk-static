import React, { useState } from "react";
import Link from "next/link";
import InputSelect from "../../../src/components/search";
import { COMPANIES } from "../../../src/services/allPlacesWorked";
import styles from "./Heading.module.scss";
import { Title } from "../../../styles/styles";
import Nav from "../nav";
import { userStore } from "../../context/providers";

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
  const { fullName } = userStore();
  const [jobs, setJobs] = useState<IJobs[]>(COMPANIES);
  const downloadAction = () => {
    console.log("sdgfds");
  };
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
    <div>
      <Title className={styles.hero__heading}>Creative Milk</Title>
      <span className="pl-6">{fullName}</span>
      <Nav
        onClick={() => {
          return downloadAction();
        }}
      />
      <InputSelect inputSearchList={searchResults} clear={clear} />
      <hr />
    </div>
  );
};
export default Heading;
