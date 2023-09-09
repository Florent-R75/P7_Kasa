import React from "react";
import starEmpty from "../assets/rate/starEmpty.svg";
import starFull from "../assets/rate/starFull.svg";

function Rate(props) {
  const score = props.score; // Je recupere la props et je la stocke dans une variable.
  const notes = [1, 2, 3, 4, 5]; // Je cree le tableau des notes possibles.
  return (
    <div className="rate-container">
      {/* Je boucle sur le tableau a partir de la valeur la plus basse, et je verifie a chaque iteration la difference entre le score et les notes possibles */}
      {notes.map((note) =>
        score >= note ? (
          // Tant que le score est superieur ou egale a la valeur du tableau boucle, une etoile vide est generee.
          <img
            key={note.toString()}
            className="etoile"
            src={starEmpty}
            alt="star"
          />
        ) : (
          // Des que le score est egale a la valeur du tableau boucle, la fonctionne commence a genere les etoiles pleines.
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
