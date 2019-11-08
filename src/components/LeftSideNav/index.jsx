import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import "./leftSideNav.scss";
import waves from "../../assets/imgs/waves.svg";

export default () => {
  return (
    <div className="sideNavContainer">
      <div>
        <SearchIcon />
        <input type="text" placeholder="Zona de interesse" />
      </div>

      <div>
        <p>Sugestões:</p>
        <div>
          <RoomIcon
            style={{ color: "#0C938F", width: "28px", height: "28px" }}
          />
          <div>
            <p>Cruz das Alma</p>
            <span>Maceió, Alagoas</span>
          </div>
        </div>

        <div>
          <RoomIcon
            style={{ color: "#0C938F", width: "28px", height: "28px" }}
          />
          <div>
            <p>Ponta Verde</p>
            <span>Maceió, Alagoas</span>
          </div>
        </div>

        <div>
          <RoomIcon
            style={{ color: "#0C938F", width: "28px", height: "28px" }}
          />
          <div>
            <p>Jacarecica</p>
            <span>Maceió, Alagoas</span>
          </div>
        </div>
      </div>

      <img
        src={waves}
        alt="Ondas"
        style={{ bottom: 0, position: "absolute" }}
      />
    </div>
  );
};
