import React, { useState } from "react";
import "./Home.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/button";
import { CreateTeamModal, CreateGameModal } from "../../modal";

export const HomePage = () => {
  const [openTeam, setOpenTeam] = useState(false);
  const handleOpenTeam = () => setOpenTeam(true);
  const handleCloseTeam = () => setOpenTeam(false);
  const [openGame, setOpenGame] = useState(false);
  const handleOpenGame = () => setOpenGame(true);
  const handleCloseGame = () => setOpenGame(false);

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
