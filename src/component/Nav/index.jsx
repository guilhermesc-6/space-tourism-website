import "./style.scss";
import logo from "../../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const location = useLocation();

  const handleClick = (e) => {
    props.setUrl(e.target.pathname);
  };

  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="rectangle"></div>
        <nav>
          <ul className="nav-ul">
            <li className={`home ${props.url === "" ? "active" : ""}`}>
              <Link to="/" onClick={handleClick}>
                <span>00</span> Home
              </Link>
            </li>
            <li
              className={`destination ${
                props.url === "destination" ? "active" : ""
              }`}
            >
              <Link to="destination" onClick={handleClick}>
                <span>01</span> Destination
              </Link>
            </li>
            <li className={`crew ${props.url === "crew" ? "active" : ""}`}>
              <Link to="crew" onClick={handleClick}>
                <span>02</span> Crew
              </Link>
            </li>
            <li
              className={`technology ${
                props.url === "technology" ? "active" : ""
              }`}
            >
              <Link to="technology" onClick={handleClick}>
                <span>03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
