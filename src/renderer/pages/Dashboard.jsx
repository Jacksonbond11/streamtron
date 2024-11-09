import React from "react";

const Dashboard = ({ navigateToUrl, handleSetLiveSportsOpen }) => {
  const apps = [
    {
      name: "Netflix",
      url: "https://netflix.com",
    },
    {
      name: "Youtube",
      url: "https://youtube.com",
    },
    {
      name: "Twitch",
      url: "https://twitch.tv",
    },
    {
      name: "Hulu",
      url: "https://hulu.com",
    },
    {
      name: "Max",
      url: "https://max.com",
    },
  ];

  return (
    <div className="w-full bg-gray-700">
      <div className="w-1/2 m-auto">
        <h1 className="text-3xl font-bold text-center">Streamtron</h1>
        <div className="grid grid-cols-4 gap-2">
          {apps.map((app) => {
            return <button className="btn" onClick={() => navigateToUrl(app.url)}>
              {app.name}
            </button>;
          })}
          <button
            className="btn"
            onClick={() => handleSetLiveSportsOpen()}
          >
            Sports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
