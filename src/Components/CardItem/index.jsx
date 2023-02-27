import React from "react";
import "../../Styles/Components/CardItem/style.css";

const ERRORIMG =
  "https://static.vecteezy.com/system/resources/previews/013/317/283/original/set-of-animal-paw-print-dog-or-cat-footprint-icon-illustration-paw-prints-icon-paw-dog-puppy-cat-bear-wolf-legs-foot-prints-free-vector.jpg";

function CardItem({ url, breeds, species, name, description,age }) {
  const { primary, secondary, unknown } = breeds;
  return (
    <div className="wrapper-card">
      <div className="card">
        <div className="img-box">
          <img src={url ? url : ERRORIMG} alt="Animals" />
        </div>
        <div className="content">
          <h2>
            {species ? species : "Unknown"}
            
            {!unknown ? `${" - "} ${primary}` : ""}
            <br />

            <span>{name ? name : "Unnamed"} {age ? `${" - "} ${age}` : ""}</span>
          </h2>
          <p>{description ? description : "Indescribable"}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
