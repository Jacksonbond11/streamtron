// src/renderer/App.js
import React from 'react';
import Dashboard from './pages/Dashboard';


function App() {
  const navigateToUrl = (url) => {
    console.log("Sending URL to main process:", url);
    window.electronAPI.navigateToUrl(url);
  };

  return (
    <div>
      <Dashboard navigateToUrl={navigateToUrl}/>
    </div>
  );
}

export default App;
