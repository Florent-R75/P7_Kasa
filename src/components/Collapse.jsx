// import modules
import { useState } from "react";

// import images
import arrow from "../assets/collapse/arrow-collapse.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <div onClick={display}>
          {/* {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )} */}
          <img
            className={
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
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
