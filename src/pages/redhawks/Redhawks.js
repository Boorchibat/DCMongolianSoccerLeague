import React from "react";
import "./Redhawks.css";
import { SingleTeam } from "../../cards";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const Redhawks = () => {
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
              style={{ height: "100px", width: "100px" }}
              src="redhawks.png"
              alt="redhawks"
            />
          </div>
          <h1>Red Hawks team information</h1>
          <div>
            <SingleTeam teamId="Red-hawks" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
