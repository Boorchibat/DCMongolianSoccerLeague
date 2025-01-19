import * as React from "react";
import { TextField, Box, CircularProgress } from "@mui/material";
import { Modal } from "./modal";
import { Button } from "../components/button";
import { useState } from "react";
import { teamCollection } from "../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

export const CreateGameModal = (props) => {
  const { open, handleClose } = props;
  console.log(open);
  const [team, setTeam] = useState("");
  const [logo, setLogo] = useState();
  const [TeamTwo, setTeamTwo] = useState();
  const [logoTwo, setLogoTwo] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGame = async (e) => {
    if (team === "" || TeamTwo === "") {
      setError("Please enter all fields");
    } else {
      setLoading(true);
      console.log("running");

      await addDoc(teamCollection, {
        team: team,
        logo: logo,
        createdAt: serverTimestamp(),
      });

      setTeam("");
      setTeamTwo("");
      setError("");
      setLoading(false);
      handleClose();
      console.log("stopped runnning");
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Create Game</h3>

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
                placeholder="Home Team Name"
                type="Name"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
              <div style={{display:"flex", gap:"10px"}}>
                <p style={{marginBlockEnd:"0", marginBlockStart:"0"}}>Select Team Logo</p>
              <input
                placeholder="Team One Logo"
                type="file"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
              </div>
              <TextField
                placeholder="Away Team Name"
                type="Name"
                value={TeamTwo}
                onChange={(e) => setTeamTwo(e.target.value)}
              />
               <div style={{display:"flex", gap:"10px"}}>
               <p style={{marginBlockEnd:"0", marginBlockStart:"0"}}>Select Team Logo</p>
              <input
                placeholder="Team One Logo"
                type="file"
                value={logoTwo}
                onChange={(e) => setLogoTwo(e.target.value)}
              />
              </div>
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
