import React from "react";

function Tag({ tag }) {
  return (
    <div className="tag-container">
      <span className="tag-container__button">{tag}</span>
    </div>
  );
}

export default Tag;
