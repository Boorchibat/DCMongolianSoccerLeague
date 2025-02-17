import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { TeamContextProvider } from "./context/TeamContext";
import {
  GameContextProvider,
  UserContextProvider,
  ResultsGameProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TeamContextProvider>
        <GameContextProvider>
          <ResultsGameProvider>
            <App />
          </ResultsGameProvider>
        </GameContextProvider>
      </TeamContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
