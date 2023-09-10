import React, { useState } from "react";

// import images
import arrowLeft from "../assets/carrousel/arrow.left.carrousel.svg";
import arrowRight from "../assets/carrousel/arrow.right.carrousel.svg";

function Carrousel({ slides }) {
  /* Crée un Hook d'état */
  const [current, setCurrent] = useState(0); //Je définie le point de retournement du slide à 0.
  const length = slides.length; //Je stocke la longueur du tableau de slides.

  /** Function pour l'image precedente */
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  /**Function pour l'image suivante */
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && ( // Je verifie si le Carrousel possede plus d'1 image avant d'afficher les fleches de defilement
        <>
          <div className="left-Arrow" onClick={prevImage}>
            <img src={arrowLeft} alt="flèche-directionnelle-précédent"></img>
          </div>

          <div className="right-Arrow" onClick={nextImage}>
            <img src={arrowRight} alt="flèche-directionnelle-suivant"></img>
          </div>
        </>
      )}

      {slides.map((image, index) => {
        return (
          <div
            key={index}
            // Je definis une condition pour controller l'activation du Carrousel
            className={index === current ? "slider active" : "slider"}
          >
            {/* Je definis une condition pour controller le rendu du Carrousel */}
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {/* Je definis une condition pour eviter l'affichage d'un tableau vide */}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
