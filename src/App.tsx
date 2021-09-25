import "./App.css";
import Background from "./Layout/Background";
import React, { useState, createContext } from "react";
import GameProvider from "./Contexts/GameContext";
function App() {
  return (
    <div className="App">
      <GameProvider props={null}>
        <Background></Background>
      </GameProvider>
    </div>
  );
}

export default App;
