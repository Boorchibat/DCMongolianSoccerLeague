import React from "react";
import "./Club.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Club = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", margin: "50px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              justifyContent: "center",
            }}
          >
            <a href="/wolves">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img
                    style={{ height: "100px", width: "150px", margin: "10px" }}
                    src="wolves.jpeg"
                    alt="img"
                  />
                </div>{" "}
                <h1>wolves</h1>
              </div>
            </a>
            <a href="/mcc">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className="image" src="MCC team badge.jpg" alt="img" />{" "}
                </div>
                <h1>MCC</h1>
              </div>
            </a>
            <a href="/jaguars">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className="image" src="jaguars.jpeg" alt="img" />{" "}
                </div>
                <h1>Jaguars</h1>
              </div>
            </a>
            <a href="/dc-hawks">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className="image" src="hawks.jpeg" alt="img" />{" "}
                </div>
                <h1>Hawks</h1>
              </div>
            </a>
            <a href="/red-hawks">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className="image" src="redhawks.png" alt="img" />
                </div>{" "}
                <h1>Red hawks</h1>
              </div>
            </a>
            <a href="/dc-masters">
              <div className="clubs">
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className="image" src="masters.jpeg" alt="img" />
                </div>{" "}
                <h1>DC masters</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
