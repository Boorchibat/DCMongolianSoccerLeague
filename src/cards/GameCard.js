import React from "react";

export const GameCard = (props) => {
  const { games } = props;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "5px",
          marginTop: "50px",
        }}
      >
        {games ? (
          <div
            style={{
              display: "flex",
              gap: "200px",
              fontSize: "25px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: "50px" }}>
              <img
                style={{ height: "75px", width: "75px", marginTop:"10px" }}
                src={games.logo}
                alt="hey"
              />
              <p> {games.team ? games.team : "No teams"}</p>
            </div>

            <p>vs </p>
            <div style={{ display: "flex", gap: "50px" }}>
              <p> {games.TeamTwo ? games.TeamTwo : "No teams"}</p>
              <img
                style={{ height: "75px", width: "75px", marginTop:"10px" }}
                src={games.logoTwo}
                alt="img"
              />
            </div>
          </div>
        ) : (
          <p>No games available.</p>
        )}
        <div style={{ display: "flex", justifyContent: "center", fontSize:"20px" }}>
          At {games.address ? games.address : "No Location added"}
        </div>
      </div>
    </div>
  );
};
