import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./component/Nav";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const location = window.location.pathname.split("/")[1];
    setUrl(location);
  }, [url]);

  return (
    <div id="container" className={`-${url}`}>
      <BrowserRouter>
        <Nav url={url} setUrl={setUrl} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
