import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useResultsGameContext } from "../../context/ResultsGameContext";
import { ResultsCard } from "../../cards/ResultsCard";
import { DeleteResultModal } from "../../modal/DeleteResultModal";

export const Results = () => {
  const { results, resultsLoading } = useResultsGameContext(); // Destructure results and loading state from context
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedResultId, setSelectedResultId] = useState(null);

  // Ensure results are not undefined or null
  const singleResults = results || [];

  // Handle opening the delete modal
  const handleOpenDelete = (resultId) => {
    setSelectedResultId(resultId);
    setOpenDelete(true);
  };

  // Handle closing the delete modal
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setSelectedResultId(null);
  };

  if (resultsLoading) {
    return (
      <div>
        <Header />
        <p>Loading results...</p>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {singleResults.length > 0 ? (
        singleResults.map((item, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 14,
            }}
            onClick={() => handleOpenDelete(item.resultId)} // Ensure you're passing the correct ID
          >
            <ResultsCard singleResult={item} />
          </div>
        ))
      ) : (
        <p>No results available.</p>
      )}
      <DeleteResultModal
        open={openDelete}
        handleClose={handleCloseDelete}
        resultId={selectedResultId}
      />
      <Footer />
    </div>
  );
};
