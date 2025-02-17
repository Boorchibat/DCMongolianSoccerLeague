import React, { useState } from "react";
import "./Table.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/button";

export const Table = () => {
  const loadSavedData = () => {
    const savedData = localStorage.getItem("tableData");
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            place: "1st",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
          {
            place: "2nd",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
          {
            place: "3rd",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
          {
            place: "4th",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
          {
            place: "5th",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
          {
            place: "6th",
            club: "",
            wins: "",
            draws: "",
            losses: "",
            ga: "",
            gf: "",
            points: "",
          },
        ];
  };

  const [tableData, setTableData] = useState(loadSavedData);

  const handleInputChange = (e, rowIndex, columnName) => {
    const updatedData = [...tableData];
    let value =
      columnName === "wins" ||
      columnName === "ga" ||
      columnName === "gf" ||
      columnName === "points"
        ? parseFloat(e.target.value) || 0
        : e.target.value;

    if (value < 0) {
      value = 0;
    }

    updatedData[rowIndex][columnName] = value;
    setTableData(updatedData);
  };


  const handleSaveData = () => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  };

  return (
    <div>
      <Header />
      <div id="table-div">
        <div>
          <table className="scores-table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Club</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>G/A</th>
                <th>G/F</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.place}</td>
                  <td>
                    <input
                      type="text"
                      value={row.club}
                      onChange={(e) => handleInputChange(e, rowIndex, "club")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.wins}
                      onChange={(e) => handleInputChange(e, rowIndex, "wins")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.draws}
                      onChange={(e) => handleInputChange(e, rowIndex, "draws")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.losses}
                      onChange={(e) => handleInputChange(e, rowIndex, "losses")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.ga}
                      onChange={(e) => handleInputChange(e, rowIndex, "ga")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.gf}
                      onChange={(e) => handleInputChange(e, rowIndex, "gf")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.points}
                      onChange={(e) => handleInputChange(e, rowIndex, "points")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            gap: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleSaveData}>Save Data</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
