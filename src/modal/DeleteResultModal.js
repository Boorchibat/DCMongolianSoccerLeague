import { Modal } from "./modal";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../components/button";
import { useResultsGameContext } from "../context/ResultsGameContext"; 
import { useNavigate } from "react-router-dom";

export const DeleteResultModal = (props) => {
  const { open, handleClose, resultId } = props;
  const { deleteResult } = useResultsGameContext(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!resultId) {
      alert("Result ID is missing!");
      return;
    }
    setLoading(true);
    try {
      await deleteResult(resultId); 
      setLoading(false);
      handleClose(); 
      navigate("/results"); 
    } catch (err) {
      console.error("Error deleting game: ", err);
      setError("An error occurred while deleting the result.");
      setLoading(false);
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: "red" }}>{error}</div> 
        ) : (
          <div>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              Are you sure you want to delete this Result?
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
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};
