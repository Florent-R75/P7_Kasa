import React from "react";

function Host({ name, picture }) {
  return (
    <>
      <span className="name-host">{name}</span>
      <img className="photo-host" src={picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
