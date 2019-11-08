import React from "react";
import "./seaMap.scss";

export default ({ toggleRightSideNav }) => {
  return (
    <div style={{ width: "100%" }} onClick={toggleRightSideNav}>
      <div id="map"></div>
    </div>
  );
};
