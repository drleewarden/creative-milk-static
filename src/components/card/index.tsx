import React, { useState } from "react";
import { Imag } from "./styles";

export const Card: React.FC = ({ ind, job }) => {
  const [allActiveCards, setAllActiveCards] = useState<boolean[]>([]);
  const hoverCard = (e, ind) => {
    console.log(e);
    setAllActiveCards({
      ...allActiveCards,
      [ind]: !allActiveCards[ind],
    });
    //setActiveCard(!activeCard);
  };
  return (
    <>
      {/* <div
        key={ind}
        id={ind + "-" + job?.name}
        onMouseEnter={(e) => {
          hoverCard(e, ind);
        }}
        onMouseLeave={(e) => {
          hoverCard(e, ind);
        }}
        className={styles.card}
      >
        {allActiveCards[ind] && "testsdfds"}
        <h3 className={styles.cardTitle}>{job?.name}</h3>
        <div className={styles.imgWrapper}>
          <img
            className={styles.image}
            src={`images/${job.image}`}
            alt={"Picture of the  " + job?.name}
          />
        </div>
        <br />
        <div className={styles.decWrapper} style={{}}>
          <i className={styles.cardDescription}>{job?.description}</i>
        </div>
      </div> */}
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
