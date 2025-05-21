import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="content">
      <div className="header-start">
        <h1 className="content-header-start">FIND FREE GAMES TO PLAY</h1>
      </div>
      <div className="content-body">
        <img src="./public/bg.jpg" alt="gamer-illustration" />

        <div className="right">
          <p className="subtitle">
            We track the best free PC and browser games <br /> so you don’t have
            to
          </p>
          <Link to="/home" className="start-btn">
            Browse
          </Link>
        </div>
      </div>

      {/* <div className="right-side">
              <p className="subtitle">
                  We track the best free PC and browser games <br /> so you
                  don’t have to
              </p>
              <button className="start-btn">Browse</button>
          </div> */}
    </div>
  );
}

export default Start;
