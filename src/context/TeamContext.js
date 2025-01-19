import { onSnapshot } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { teamCollection } from "../firebase";

 
const TeamContext = createContext();
 
export const TeamContextProvider = (props) => {
  const { children } = props;
  const [teams, setTeams] = useState([]);
 const [teamsLoading, setTeamsLoading] = useState(true);

 useEffect(() => {
    const getTeamData = onSnapshot(teamCollection, (QueryCollectionSnapshot) => {
        const data = QueryCollectionSnapshot.docs.map((doc) => ({
            ...doc.data(),
            teamId: doc.id,
        }));

        setTeams(data);
        setTeamsLoading(false)
    })

    return () => getTeamData()
 }, []);
  return <TeamContext.Provider value={{ teams, teamsLoading}}>{children}</TeamContext.Provider>;
};
 
export const useTeamContext = () => {
  return useContext(TeamContext);
};