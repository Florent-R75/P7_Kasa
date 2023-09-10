// import modules
import { useState } from "react";

// import images
import arrow from "../assets/collapse/arrow-collapse.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Je definis la variable par default sur false, donc a l'etat ferme.

  const toggle = () => {
    setIsOpen(!isOpen); // Je definis la fonction de bascule pour la connecter au OnClick.
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <div onClick={toggle}>
          <img
            className={
              // Selon l'etat de la variable, on applique une transformation sur le CSS pour declencher une animation de la fleche.
              !isOpen
                ? "collapse__dropdown__arrow_btn_down"
                : "collapse__dropdown__arrow_btn_up"
            }
            src={arrow}
            alt="arrow-bouton-collapse"
          />
        </div>
      </div>
      <div className="collapse__dropdown__content">
        {/* En fonction de l'etat de la variable, le contenu s'affiche ou disparait */}
        {isOpen && (
          <div className="collapse__dropdown__content__text">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
