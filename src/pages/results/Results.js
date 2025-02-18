import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useResultsGameContext } from "../../context/ResultsGameContext";
import { ResultsCard } from "../../cards/ResultsCard";
import { DeleteResultModal } from "../../modal/DeleteResultModal";

export const Results = () => {
  const { results, resultsLoading } = useResultsGameContext(); 
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedResultId, setSelectedResultId] = useState(null);

  const singleResults = results || [];

  const handleOpenDelete = (resultId) => {
    setSelectedResultId(resultId);
    setOpenDelete(true);
  };


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
            onClick={() => handleOpenDelete(item.resultId)} 
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
