import React from "react";
import starEmpty from "../assets/rate/starEmpty.svg";
import starFull from "../assets/rate/starFull.svg";

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={starEmpty}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={starFull}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
