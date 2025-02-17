import React from "react";
import "./Jaugars.css";
import { SingleTeam } from "../../cards";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Jaguars = () => {
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
                  src="jaguars.jpeg"
                  alt="jaguars"
                />
              </div>
              <h1>Jaguars team information</h1>
              <div>
                <SingleTeam teamId="Jaguars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
