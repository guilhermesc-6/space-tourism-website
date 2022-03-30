import { useState, useEffect } from "react";
import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import "./style.scss";
import data from "../../assets/data.json";

function Technology() {
  const [technology, setTechnology] = useState(data.technology);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle("Launch vehicle");
    setDescription(technology[0].description);
  }, []);

  const handleClick = (e) => {
    let item = e.target.innerText - 1;
    setTitle(technology[item].name);
    setDescription(technology[item].description);
  };

  return (
    <div className="main-technology">
      <h3>
        <span>03</span> Space Launch 101
      </h3>
      <div className="content">
        <div className="btns">
          <div
            className={title === "Launch vehicle" ? "active" : ""}
            onClick={handleClick}
          >
            <span>1</span>
          </div>
          <div
            className={title === "Spaceport" ? "active" : ""}
            onClick={handleClick}
          >
            <span>2</span>
          </div>
          <div
            className={title === "Space capsule" ? "active" : ""}
            onClick={handleClick}
          >
            <span>3</span>
          </div>
        </div>
        <div className="texts">
          <h5>The Therminology...</h5>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="image">
          <img
            className="portrait"
            src={
              title === "Spaceport"
                ? spaceportPortrait
                : title === "Space capsule"
                ? capsulePortrait
                : launchPortrait
            }
            alt={title}
          />
          <img
            className="landscape"
            src={
              title === "Spaceport"
                ? spaceportPortrait
                : title === "Space capsule"
                ? capsulePortrait
                : launchPortrait
            }
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
