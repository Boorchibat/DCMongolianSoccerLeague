import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { teamCollection, gameCollection } from "../firebase";

const GameContext = createContext();

export const GameContextProvider = (props) => {
  const { children } = props;
  const [games, setGames] = useState([]);
  const [gamesloading, setGamesLoading] = useState(true);

  useEffect(() => {
    const getGameData = onSnapshot(
      gameCollection,
      async (CollectionSnapshot) => {
        const gamePromises = CollectionSnapshot.docs.map(async (gameDoc) => {
          const gameData = gameDoc.data();

          const teamRef = doc(teamCollection, gameData.teamId);
          const teamDoc = await getDoc(teamRef);
          const teamData = teamDoc.exists() ? teamDoc.data() : null;

          return {
            gameId: gameDoc.id,
            team: teamData,
            ...gameData,
          };
        });

        const gameWithDetails = await Promise.all(gamePromises);

        setGames(gameWithDetails);
        setGamesLoading(false);
      }
    );

    return () => getGameData();
  }, []);
  return (
    <GameContext.Provider value={{ games, gamesloading }}>
      {children}
    </GameContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(GameContext);
};