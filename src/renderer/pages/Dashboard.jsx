import React from "react";

const Dashboard = ({ navigateToUrl }) => {
  return (
    <div className="w-full">
      <div className="w-1/2 m-auto">
        <h1 className="text-3xl font-bold text-center">Streamtron</h1>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="btn"
            onClick={() => navigateToUrl("https://netflix.com")}
          >
            Netflix
          </button>
          <button
            className="btn"
            onClick={() => navigateToUrl("https://youtube.com")}
          >
            Youtube
          </button>
          <button
            className="btn"
            onClick={() => navigateToUrl("https://twitch.tv")}
          >
            Twitch
          </button>
          <button
            className="btn"
            onClick={() => navigateToUrl("https://hulu.com")}
          >
            Hulu
          </button>
          <button
            className="btn"
            onClick={() => navigateToUrl("https://max.com")}
          >
            Max
          </button>
          <button
            className="btn"
            onClick={() => navigateToUrl("https://v3.sportsurge.to")}
          >
            Sports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
