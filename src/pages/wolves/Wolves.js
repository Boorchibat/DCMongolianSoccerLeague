import React from "react";
import "./Wolves.css";
import { SingleTeam } from "../../cards";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const Wolves = () => {
  return (
    <div>
      <Header />
      <div
        style={{ justifyContent: "center", display: "flex", margin: "50px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "50px",
            }}
          >
            <img
              style={{ height: "100px", width: "160px" }}
              src="wolves.jpeg"
              alt="wolves"
            />
          </div>
          <h1>Wolves team information</h1>
          <div>
            <SingleTeam teamId="wolves" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
