import React, { useState, useEffect } from "react";

export const SingleTeam = ({ teamId }) => {
  const [teamInfo, setTeamInfo] = useState({
    wins: "",
    losses: "",
    draws: "",
  });

  useEffect(() => {
    const savedTeamData = localStorage.getItem(teamId);
    if (savedTeamData) {
      setTeamInfo(JSON.parse(savedTeamData));
    }
  }, [teamId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Math.max(0, parseInt(value) || 0);
    const updatedTeamInfo = { ...teamInfo, [name]: numericValue };

    setTeamInfo(updatedTeamInfo);

    localStorage.setItem(teamId, JSON.stringify(updatedTeamInfo));
  };

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div>
        <label>Wins: </label>
        <input
          type="number"
          name="wins"
          value={teamInfo.wins}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Losses: </label>
        <input
          type="number"
          name="losses"
          value={teamInfo.losses}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Draws: </label>
        <input
          type="number"
          name="draws"
          value={teamInfo.draws}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
