import React from "react";

export const GameCard = (props) => {

  const {games} = props;

  return (
    <div style={{width:"100%", backgroundColor:"white", display:"flex", justifyContent:"center", alignContent:"center"}}>
      <div style={{backgroundColor:"grey", width:"80%", justifyContent:"center",alignContent:"center", borderRadius:"5px", marginTop:"50px"}}>
        {games ? (
          <div style={{display:"flex", gap:"200px", fontSize:"25px", alignContent:"center", justifyContent:"center"}}>
            <p> {games.team ? games.team : 'No teams'}</p>
            <p>vs</p>
            <p> {games.TeamTwo ? games.TeamTwo : "No teams"}</p>
          </div>
        ) : (
          <p>No games available.</p>
        )}
        <div style={{display:"flex", justifyContent:"center"}}>At {games.address  ? games.address : "No Location added"}</div>
      </div>
    </div>
  );
};
