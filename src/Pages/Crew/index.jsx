import { useState, useEffect } from "react";
import data from "../../assets/data.json";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import ansari from "../../assets/crew/image-anousheh-ansari.webp";
import "./style.scss";

function Crew() {
  const [crews, setCrews] = useState([...data.crew]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setName(crews[0].name);
    setBio(crews[0].bio);
    setRole(crews[0].role);
  }, []);

  const handleClick = (e) => {
    let index = e.target.value;
    setName(crews[index].name);
    setBio(crews[index].bio);
    setRole(crews[index].role);
  };
  console.log(name);

  return (
    <div className="main-crew">
      <div className="content">
        <div className="texts">
          <h3>
            <span>02</span> Meet your crew
          </h3>
          <div className="infos">
            <h5>{role}</h5>
            <h4>{name}</h4>
            <p>{bio}</p>
          </div>
          <div className="btns">
            <label htmlFor="crew" onChange={handleClick}>
              <input type="radio" name="crew" id="crew-1" value={0} />
              <input type="radio" name="crew" id="crew-2" value={1} />
              <input type="radio" name="crew" id="crew-3" value={2} />
              <input type="radio" name="crew" id="crew-3" value={3} />
            </label>
          </div>
        </div>
        <div className="image">
          <img
            src={
              name === "Douglas Hurley"
                ? douglas
                : name === "Mark Shuttleworth"
                ? mark
                : name === "Victor Glover"
                ? victor
                : ansari
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Crew;
