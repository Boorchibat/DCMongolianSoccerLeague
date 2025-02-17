import * as React from "react";
import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Modal } from "./modal";
import { Button } from "../components/button";
import { useState } from "react";
import { gameCollection } from "../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useTeamContext } from "../context/TeamContext";
import { uploadImage } from "../cloudinary";

export const CreateGameModal = (props) => {
  const { open, handleClose } = props;
  console.log(open);
  const [team, setTeam] = useState();
  const [logo, setLogo] = useState();
  const [address, setAddress] = useState("");
  const [TeamTwo, setTeamTwo] = useState();
  const [logoTwo, setLogoTwo] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGame = async (e) => {
    if (team === "" || TeamTwo === "" || !logo || !logoTwo) {
      setError("Please enter all fields");
    } else {
      setLoading(true);
      const deployLink = await uploadImage(logo);
      const deployLinkTwo = await uploadImage(logoTwo);
      console.log(deployLink);

      await addDoc(gameCollection, {
        team: team,
        TeamTwo: TeamTwo,
        logo: deployLink,
        logoTwo: deployLinkTwo,
        address: address,
        createdAt: serverTimestamp(),
      });
      console.log(team);

      setTeam("");
      setAddress("");
      setLogo("");
      setTeamTwo("");
      setError("");
      setLoading(false);
      handleClose();
      console.log("stopped runnning");
    }
  };

  const { teams, teamsLoading } = useTeamContext();
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Create Game</h3>

        {loading || teamsLoading ? (
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
              <Select
                value={team}
                inputProps={{ "asria-label": "without label" }}
                displayEmpty
                onChange={(e) => setTeam(e.target.value)}
                sx={{
                  height: "37px",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              >
                <MenuItem value="">
                  {teams.length === 0 ? "No Team..." : "Select Team"}
                </MenuItem>
                {teams.map((team) => (
                  <MenuItem value={team.team} key={team.team}>
                    {team.team}
                  </MenuItem>
                ))}
              </Select>
              <div style={{ display: "flex", gap: "10px" }}>
                <p style={{ marginBlockEnd: "0", marginBlockStart: "0" }}>
                  Select Team Logo
                </p>
                <input
                  placeholder="Team One Logo"
                  type="file"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </div>
              <Select
                name="team"
                value={TeamTwo}
                inputProps={{ "asria-label": "without label" }}
                displayEmpty
                onChange={(e) => setTeamTwo(e.target.value)}
                sx={{
                  height: "37px",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              >
                <MenuItem value="">
                  {teams.length === 0 ? "No Team..." : "Select Team Two"}
                </MenuItem>
                {teams.map((team) => (
                  <MenuItem value={team.team} key={team.team}>
                    {team.team}
                  </MenuItem>
                ))}
              </Select>
              <div style={{ display: "flex", gap: "10px" }}>
                <p style={{ marginBlockEnd: "0", marginBlockStart: "0" }}>
                  Select Team Logo
                </p>
                <input
                  placeholder="Team Two Logo"
                  type="file"
                  onChange={(e) => setLogoTwo(e.target.files[0])}
                />
              </div>
              <TextField
                placeholder="Address and Time"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
