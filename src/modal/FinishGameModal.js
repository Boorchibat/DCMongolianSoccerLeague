import { Modal } from "./modal";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../components/button";
import { gameCollection } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const FinishGameModal = (props) => {
  const { open, handleClose, gameId } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  console.log(gameId)
  const handleDelete = async () => {
    if (!gameId) {
        alert("Game ID is missing!");
        return;} else{
            setLoading(true);
            const gamesRef = doc(gameCollection, gameId);
            await deleteDoc(gamesRef);
        
            setLoading(false);
            navigate("/");
        }
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {loading ? (
                   <div>Loading...</div>
                 ) : (
                   <div>
                     <h3 style={{ display: "flex", justifyContent: "center" }}>
                       Are you sure you want to delete this Game?
                     </h3>
                     <div
                       style={{
                         display: "flex",
                         gap: "50px",
                         justifyContent: "center",
                         marginTop: "15px",
                       }}
                     >
                       <Button onClick={handleClose}>Cancel</Button>
                       <Button onClick={handleDelete}>Yes</Button>
                     </div>
                   </div>
                 )}
      </Box>
    </Modal>
  );
};
