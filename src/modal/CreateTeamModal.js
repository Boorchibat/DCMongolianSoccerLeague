import * as React from "react";
import { TextField, Box, CircularProgress } from "@mui/material";
import { Modal } from "./modal";
import { Button } from "../components/button";
import { useState } from "react";
import { teamCollection } from "../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";


export const CreateTeamModal = (props) => {
  const { open, handleClose } = props;
  console.log(open);
  const [team, setTeam] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGame = async (e) => {
    if (team === "") {
      setError("Please enter all fields");
    } else {
      setLoading(true);
      console.log("running");

      await addDoc(teamCollection, {
        team: team,
        createdAt: serverTimestamp(),
      });

      setTeam("");
      setError("");
      setLoading(false);
      handleClose();
      console.log("stopped runnning");
    }
    console.log("succesful")
  };
  

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Create Team</h3>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                placeholder="Teamc Name"
                type="Name"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
              <div id="blog-error">
                <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
              </div>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleGame}>Save</Button>
              </Box>
            </div>
          </Box>
        )}
      </Box>
    </Modal>
  );
};
