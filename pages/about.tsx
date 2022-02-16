import type { NextPage } from "next";
import BaseTemplate from "../src/components/template";
import Typography from "../src/components/typography";

const About: NextPage = () => {
  return (
    <BaseTemplate>
      <div className="container">
        <Typography styleType="xl" as="h1" text={""}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Typography>
      </div>
    </BaseTemplate>
  );
};

export default About;
