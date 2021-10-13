import React, { useState } from "react";
import { Imag } from "./styles";
interface IJob {
  image: string;
  name: string;
  colour: string;
  description: string;
}
interface ICard {
  job: IJob;
  ind: number;
}
export const Card: React.FC<ICard> = ({ ind, job }) => {
  const [allActiveCards, setAllActiveCards] = useState<boolean[]>([]);
  const hoverCard = (e: any, ind: any) => {
    console.log(e);
    setAllActiveCards({
      ...allActiveCards,
      [ind]: !allActiveCards[ind],
    });
    //setActiveCard(!activeCard);
  };
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Imag
              src={`images/${job.image}`}
              alt={"Picture of the  " + job?.name}
            />{" "}
          </div>
          <div
            className="flip-card-back"
            style={{ backgroundColor: job.colour }}
          >
            <h1>{job?.name}</h1>
            <p>{job?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
