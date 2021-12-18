import type { NextPage } from "next";
import Typography from "../src/components/typography";

const About: NextPage = () => {
  return (
    <div className="container">
      <Typography styleType="xl" as="h1" text={""}>
        About
      </Typography>
    </div>
  );
};

export default About;
