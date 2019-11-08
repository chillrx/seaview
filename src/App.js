import React, { useEffect, useState } from "react";
import "./App.scss";

import SeaMap from "./pages/seaMap";
import LeftSideNav from "./components/LeftSideNav";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import RightSideNav from "./components/RightSideNav";

function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const scr = document.createElement("script");
    scr.setAttribute(
      "src",
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_TOKEN}&callback=initMap`
    );
    document.head.appendChild(scr);
  }, []);

  const toggleRightSideNav = () => setOpened(!opened);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <p>S E A V I E W</p>
        </div>

        <div>
          <div style={{ display: "flex" }}>
            <div className="tabs">
              <p style={{ opacity: 0.9 }}>VISÃO GERAL</p>
            </div>

            <div className="tabs">
              <p style={{ color: "#B1B4BE" }}>ESTATÍSTICAS</p>
            </div>

            <div className="tabs">
              <p style={{ color: "#B1B4BE" }}>ALERTAS</p>
            </div>
          </div>

          <div>
            <EmailOutlinedIcon style={{ marginRight: 14 }} />
            <p>Contato</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <LeftSideNav />

        <SeaMap toggleRightSideNav={toggleRightSideNav} />

        <RightSideNav opened={opened} toggleRightSideNav={toggleRightSideNav} />
      </div>
    </div>
  );
}

export default App;
