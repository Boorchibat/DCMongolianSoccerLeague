import React from "react";
import "./Dchawks.css";
import { Header } from "../../components/header/Header";
import { SingleTeam } from "../../cards";
import { Footer } from "../../components/footer/Footer";

export const Dchawks = () => {
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
                  src="hawks.jpeg"
                  alt="hawk"
                />
              </div>
              <h1>DC Hawks team information</h1>
              <div>
                <SingleTeam teamId="dc-hawks" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
