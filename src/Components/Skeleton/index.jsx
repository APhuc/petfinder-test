import React from "react";
import "../../Styles/Components/Skeleton/style.css";

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="cards-loading">
        <div className="card-loading">
          <div className="image" />
          <div className="content">
            <h2 />
            <p />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
