import React, { useState } from "react";
import "./Home.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/button";
import { CreateTeamModal, CreateGameModal, FinishGameModal } from "../../modal";
import { GameCard } from "../../cards";
import { useGameContext } from "../../context/GameContext";

export const Home = () => {
  const [openTeam, setOpenTeam] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(""); // Game ID state
  const handleOpenTeam = () => setOpenTeam(true);
  const handleCloseTeam = () => setOpenTeam(false);
  const [openGame, setOpenGame] = useState(false);
  const handleOpenGame = () => setOpenGame(true);
  const handleCloseGame = () => setOpenGame(false);
  const [openFinishModal, setOpenFinishModal] = useState(false);

  const handleOpenFinishGame = (gameId) => { 
    setSelectedGameId(gameId);  
    setOpenFinishModal(true);  
  };

  const handleCloseFinishGame = () => {
    setOpenFinishModal(false);
    setSelectedGameId(null); 
  };

  const { games, gamesLoading } = useGameContext();
  const allGames = [{ name: "All", games: "" }, ...games];

  if (gamesLoading) {
    return (
      <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Loading games...</div>
    );
  }

  return (
    <div>
      <Header />
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="home-div">
          <h1>League games</h1>
          <div id="upcoming">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ margin: "0" }}>Upcoming games...</h1>
              <div id="Buttons">
                <Button onClick={handleOpenGame}>Add Game</Button>
                <Button onClick={handleOpenTeam}>Add Team</Button>
              </div>
            </div>
            <CreateTeamModal open={openTeam} handleClose={handleCloseTeam} />
            <CreateGameModal open={openGame} handleClose={handleCloseGame} />
          </div>
          {allGames.slice(1).map((game, index) => (
            <div
              key={index}
              style={{
                color: selectedGameId === game.gameId ? "#D4A373" : "#495057",  // Highlight selected game
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 14,
              }}
              onClick={() => handleOpenFinishGame(game.gameId)}  // Pass the gameId
            >
              <GameCard games={game} />
            </div>
          ))}
          <div>
            <FinishGameModal
              open={openFinishModal}
              handleClose={handleCloseFinishGame}
              gameId={selectedGameId}  // Pass the selectedGameId to the modal
            />
          </div>

          <div style={{ marginTop: "100px" }}>
            <h1>Tournaments</h1>
            <div id="img-div">
              <img className="imgz" src="Pyramid.jpg" alt="img" />
              <img className="imgz" src="DCCUP.jpg" alt="img" />
            </div>
            <div style={{ marginTop: "120px" }}>
              <h1>Photos</h1>
              <div id="photos">
                <img src="League photo.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
