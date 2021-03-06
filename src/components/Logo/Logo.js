import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 pa3">
      <Tilt
        className="Tilt br2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="logo Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={face} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
