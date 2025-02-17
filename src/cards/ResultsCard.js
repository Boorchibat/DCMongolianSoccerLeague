import React from "react";

export const ResultsCard = ({ singleResult }) => {
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
          backgroundColor: "grey",
          width: "80%",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "5px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {singleResult ? (
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
                style={{ height: "75px", width: "75px", marginTop: "25px" }}
                src={singleResult.logo}
                alt="team 1"
              />
              <p style={{marginTop:"45px"}}>{singleResult.team ? singleResult.team : "No teams"}</p>
            </div>
            <div style={{ display: "flex", gap:"50px" }}>
              <h1>{singleResult.scoreTeamOne}</h1>
              <div style={{marginTop:"20px"}}>
                <p>vs</p>
              </div>

              <h1>{singleResult.scoreTeamTwo}</h1>
            </div>

            <div style={{ display: "flex", gap: "50px" }}>
              <p style={{marginTop:"45px"}}>{singleResult.TeamTwo ? singleResult.TeamTwo : "No teams"}</p>
              <img
                style={{ height: "75px", width: "75px", marginTop: "25px" }}
                src={singleResult.logoTwo}
                alt="team 2"
              />
            </div>
          </div>
        ) : (
          <p>No games available.</p>
        )}
        <div style={{ display: "flex", justifyContent: "center", fontSize:"20px" }}>
          At {singleResult.address ? singleResult.address : "No Location added"}
        </div>
      </div>
    </div>
  );
};
