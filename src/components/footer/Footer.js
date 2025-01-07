import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div id="main-footer">
      <div id="smaller-footer">
        <img id="image" src="mfb-img1.png" alt="s" />
        <div id="divz">
          <div id="headline">
            <div className="column">
                <h1>League</h1>
                <p>Home</p>
                <p>Table</p>
                <p>Results</p>
                <>Clubs</>
            </div>
            <div className="column">
              <h1>Stats</h1>
              <p>Stats page</p>
              <p>Teams</p>
              <p>Table</p>
            </div>
            <div className="column">
              <h1>Contact</h1>
              <p>FaceBook manager Contact</p>
              <p>League administrator contact</p>
              <p>Page Creater Contact</p>
            </div>
            <div className="column">
                <h1>Information </h1>
                <p>This Website was made to give information about the league</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
