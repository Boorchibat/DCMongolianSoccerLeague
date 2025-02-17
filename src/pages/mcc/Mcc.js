import React from "react";
import "./Mcc.css";
import { Header } from "../../components/header/Header";
import { SingleTeam } from "../../cards";
import { Footer } from "../../components/footer/Footer";

export const Mcc = () => {
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
                  src="MCC team badge.jpg"
                  alt="MCC"
                />
              </div>
              <h1>MCC team information</h1>
              <div>
                <SingleTeam teamId="MCC" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
