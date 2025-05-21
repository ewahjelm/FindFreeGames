import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Start() {
  return (
    <>
      <div className="content">
        <div className="header-start">
          <h1 className="header-content">
            FIND FREE
            <br /> GAMES TO
            <br /> PLAY
          </h1>
        </div>
        <div className="content-body">
          <img src="/public/bg.jpg" alt="gamer-illustration" />

          <div className="right">
            <p className="subtitle">
              We track the best free PC and browser games <br /> so you
              don’t have to
            </p>
            <Link to="/home" className="start-btn">Great! Let's go!</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Start;
