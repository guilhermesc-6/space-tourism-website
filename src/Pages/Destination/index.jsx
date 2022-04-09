import { useState, useEffect } from "react";
import data from "../../assets/data.json";
import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import titan from "../../assets/destination/image-titan.webp";
import europa from "../../assets/destination/image-europa.webp";
import "./style.scss";

function Destination() {
  const [destinations, setDestinations] = useState([...data.destinations]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    setTitle(destinations[0].name);
    setDescription(destinations[0].description);
    setDistance(destinations[0].distance);
    setTravel(destinations[0].travel);
  }, []);

  const handleMenu = (e) => {
    const item = e.target.innerText;
    let index = 0;
    switch (item) {
      case "MOON":
        index = 0;
        break;
      case "MARS":
        index = 1;
        break;
      case "EUROPA":
        index = 2;
        break;
      case "TITAN":
        index = 3;
        break;

      default:
        break;
    }
    setTitle(destinations[index].name);
    setDescription(destinations[index].description);
    setDistance(destinations[index].distance);
    setTravel(destinations[index].travel);
  };

  return (
    <div className="main-destination">
      <h3>
        <span>01</span> Pick your Destination
      </h3>
      <div className="content">
        <div className="img">
          <img
            src={
              title === "Moon"
                ? moon
                : title === "Mars"
                ? mars
                : title === "Europa"
                ? europa
                : titan
            }
            alt={title}
          />
        </div>
        <div className="texts">
          <div className="menu" translate="no">
            <ul>
              <li
                className={title === "Moon" ? "active" : ""}
                onClick={handleMenu}
              >
                Moon
              </li>
              <li
                className={title === "Mars" ? "active" : ""}
                onClick={handleMenu}
              >
                Mars
              </li>
              <li
                className={title === "Europa" ? "active" : ""}
                onClick={handleMenu}
              >
                Europa
              </li>
              <li
                className={title === "Titan" ? "active" : ""}
                onClick={handleMenu}
              >
                Titan
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="planet-info">
            <div className="info">
              <span>Avg. Distance</span>
              <p>{distance}</p>
            </div>
            <div className="info">
              <span>Est. Travel Time</span>
              <p>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
