import React from "react";
import "./Table.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Table = () => {
  return (
    <div>
      <Header />
      <div id="table-div">
        <div>
          <table class="scores-table">
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
              <tr>
                <td>1st</td>
                <td>Team A</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
              <tr>
                <td>2nd</td>
                <td>Team C</td>
                <td>2 - 2</td>
                <td>Team D</td>
                <td>Draw</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
              <tr>
                <td>3rd</td>
                <td>Team E</td>
                <td>4 - 0</td>
                <td>Team F</td>
                <td>Team E Wins</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
              <tr>
                <td>4th</td>
                <td>Team E</td>
                <td>4 - 0</td>
                <td>Team F</td>
                <td>Team E Wins</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
              <tr>
                <td>5th</td>
                <td>Team E</td>
                <td>4 - 0</td>
                <td>Team F</td>
                <td>Team E Wins</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
              <tr>
                <td>6th</td>
                <td>Team E</td>
                <td>4 - 0</td>
                <td>Team F</td>
                <td>Team E Wins</td>
                <td>3 - 1</td>
                <td>Team B</td>
                <td>Team A Wins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};
