import { Modal } from "./modal";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "../components/button";
import { gameCollection, resultsCollection } from "../firebase";
import { addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context";

export const FinishGameModal = (props) => {
  const { open, handleClose, gameId } = props;
  const { games } = useGameContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [scoreTeamOne, setScoreTeamOne] = useState(0);
  const [scoreTeamTwo, setScoreTeamTwo] = useState(0);

  useEffect(() => {
    setScoreTeamOne(0);
    setScoreTeamTwo(0);
  }, [gameId]);

  const handleFinishGame = async (gameId) => {
    const selectedGame = games.find((game) => game.gameId === gameId);
    console.log(selectedGame);
    if (selectedGame) {
      await addDoc(resultsCollection, {
        team: selectedGame.team,
        TeamTwo: selectedGame.TeamTwo,
        logo: selectedGame.logo,
        logoTwo: selectedGame.logoTwo,
        address: selectedGame.address,
        scoreTeamOne: scoreTeamOne,
        scoreTeamTwo: scoreTeamTwo,
        createdAt: serverTimestamp(),
      });

      const deleteDocRef = doc(gameCollection, gameId);
      await deleteDoc(deleteDocRef);
    } else {
      console.log("Game not found!");
    }
  };

  const handleSubmit = async () => {
    if (gameId) {
      setLoading(true);
      try {
        await handleFinishGame(gameId);
        handleClose();
      } catch (error) {
        console.error("Error finishing game: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Game ID is missing!");
    }
  };

  const handleDelete = async () => {
    if (!gameId) {
      alert("Game ID is missing!");
      return;
    } else {
      setLoading(true);
      try {
        const gamesRef = doc(gameCollection, gameId);
        await deleteDoc(gamesRef);
        setLoading(false);
        navigate("/");
        handleClose();
      } catch (error) {
        console.error("Error deleting game: ", error);
        setLoading(false);
      }
    }
  };

  const handleScoreChange = (team, value) => {
    const limitedValue = Math.max(0, Number(value));
    if (team === "teamOne") {
      setScoreTeamOne(limitedValue);
    } else {
      setScoreTeamTwo(limitedValue);
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              Are you sure you want to delete or finish this Game?
            </h3>
            <p>Enter Final Score:</p>

            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div>
                <TextField
                  type="number"
                  value={scoreTeamOne}
                  onChange={(e) => handleScoreChange("teamOne", e.target.value)}
                  min="0"
                />
              </div>

              <div>
                <TextField
                  type="number"
                  value={scoreTeamTwo}
                  onChange={(e) => handleScoreChange("teamTwo", e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleSubmit}>Finish Game</Button>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};
