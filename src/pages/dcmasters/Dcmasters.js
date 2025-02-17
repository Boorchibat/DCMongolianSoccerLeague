import React from "react";
import "./Dcmasters.css";
import { Header } from "../../components/header/Header";
import { SingleTeam } from "../../cards";
import { Footer } from "../../components/footer/Footer";

export const Dcmasters = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "50px",
            }}
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
                  src="masters.jpeg"
                  alt="master"
                />
              </div>
              <h1>DC masters team information</h1>
              <div>
                <SingleTeam teamId="dc-masters" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
