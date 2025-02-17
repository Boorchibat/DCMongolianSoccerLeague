import React, { createContext, useState, useEffect, useContext } from "react";
import { resultsCollection, teamCollection } from "../firebase";
import { doc, deleteDoc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

const ResultContext = createContext();

export const ResultsGameProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [resultsLoading, setResultsLoading] = useState(true);

  useEffect(() => {
    const getResultData = onSnapshot(
      resultsCollection,
      async (CollectionSnapshot) => {
        const resultPromises = CollectionSnapshot.docs.map(async (resultDoc) => {
          const resultData = resultDoc.data();

        
          const teamRef = doc(teamCollection, resultData.team);
          const teamDoc = await getDoc(teamRef);
          const teamData = teamDoc.exists() ? teamDoc.data() : null;

          return {
            resultId: resultDoc.id, 
            team: teamData,
            ...resultData,  
          };
        });

        const resultsWithDetails = await Promise.all(resultPromises);
        setResults(resultsWithDetails);
        setResultsLoading(false);
      }
    );

    return () => getResultData(); 
  }, []);

  const addResult = async (result) => {
    try {
      const newDocRef = doc(resultsCollection);
      await setDoc(newDocRef, result);
      setResults((prevResults) => [...prevResults, result]);
    } catch (error) {
      console.error("Error adding result: ", error);
    }
  };

  const deleteResult = async (resultId) => {
    try {
      const resultDocRef = doc(resultsCollection, resultId);
      await deleteDoc(resultDocRef);
      setResults((prevResults) =>
        prevResults.filter((result) => result.resultId !== resultId)
      );
    } catch (error) {
      console.error("Error deleting result: ", error);
    }
  };

  return (
    <ResultContext.Provider value={{ results, resultsLoading, addResult, deleteResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultsGameContext = () => {
  return useContext(ResultContext);
};
