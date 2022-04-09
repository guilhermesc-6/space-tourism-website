import "./style.scss";
import logo from "../../assets/shared/logo.svg";
import closeBtn from "../../assets/shared/icon-close.svg";
import hamburgerBtn from "../../assets/shared/icon-hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Nav(props) {
  const [activeMenu, setActiveMenu] = useState("");
  const [hamburgerActive, setHamburgerActive] = useState("");
  const location = useLocation();

  const handleClick = (e) => {
    props.setUrl(e.target.pathname);
  };

  const openMenu = () => {
    setHamburgerActive("active");
    setActiveMenu("nav-active");
  };
  const closeMenu = () => {
    setActiveMenu("");
    setHamburgerActive("");
  };

  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <span className={`hamburger-btn ${hamburgerActive}`} onClick={openMenu}>
          <img src={hamburgerBtn} alt="Hamburger Button" />
        </span>
        <div className="rectangle"></div>
        <nav className={activeMenu}>
          <span className="close-btn" onClick={closeMenu}>
            <img src={closeBtn} alt="Close Button" />
          </span>
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
