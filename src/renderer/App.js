// src/renderer/App.js
import React from "react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LiveSportsView from "./pages/LiveSportsView";

function App() {
  const [liveSportsOpen, setLiveSportsOpen] = useState(false);

  const navigateToUrl = (url) => {
    console.log("Sending URL to main process:", url);
    window.electronAPI.navigateToUrl(url);
  };

  const handleSetLiveSportsOpen = () => {
    setLiveSportsOpen(!liveSportsOpen);
  };

  return (
    <div className=" bg-gray-700">
      {liveSportsOpen ? (
        <LiveSportsView handleSetLiveSportsOpen={handleSetLiveSportsOpen}/>
      ) : (
        <Dashboard navigateToUrl={navigateToUrl} handleSetLiveSportsOpen={handleSetLiveSportsOpen}/>
      )}
    </div>
  );
}

export default App;
