import React from "react";
import { useGameContext } from "../context/GameContext";  

export const GameCard = () => {
  const { games, gamesloading } = useGameContext(); 

  if (gamesloading) {
    return <div>Loading...</div>;
  }

  console.log(games);

  return (
    <div style={{width:"100%", height:"100px", backgroundColor:"white", display:"flex", justifyContent:"center", alignContent:"center"}}>
      <div style={{backgroundColor:"grey", width:"80%", justifyContent:"center",alignContent:"center"}}>
        {games.length > 0 ? (
          <div style={{display:"flex", gap:"200px", fontSize:"20px", alignContent:"center", justifyContent:"center"}}>
            <p> {games[0].team ? games[0].team : 'No teams'}</p>
            <p>vs</p>
            <p> {games[0].team ? games[0].TeamTwo : "No teams"}</p>
          </div>
        ) : (
          <p>No games available.</p>
        )}
        <div style={{display:"flex", justifyContent:"center"}}>At</div>
      </div>
    </div>
  );
};
