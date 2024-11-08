import React, { useState, useEffect } from "react";

const LiveSportsView = ({ handleSetLiveSportsOpen }) => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const data = await window.electronAPI.getSports();
        setSports(data);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      }
    };

    fetchSports();
  }, []);

  // Group sports by their type
  const groupedSports = sports.reduce((acc, sport) => {
    (acc[sport.sport] = acc[sport.sport] || []).push(sport);
    return acc;
  }, {});

  return (
    <div>
      <h1>Live Sports:</h1>
      {Object.keys(groupedSports).length > 0 ? (
        <div>
          {Object.keys(groupedSports).map((sportType) => (
            <div key={sportType}>
              <h2 className="text-xl font-bold mt-4 mb-2">{sportType}</h2>
              <div className="grid grid-cols-3 gap-2">
                {groupedSports[sportType].map((sport) => (
                  <div key={`${sport.team1Full}-${sport.team2Full}`} className="w-64 border-2 rounded-md p-2">
                    <div className="flex justify-between">
                      <div>{sport.team1Full}</div>
                      <img
                        className="w-12"
                        src={`../../assets/${sport.sport}/${sport.team1Short}.png`}
                        alt={`${sport.team1Full} logo`}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div>{sport.team2Full}</div>
                      <img
                        className="w-12"
                        src={`../../assets/${sport.sport}/${sport.team2Short}.png`}
                        alt={`${sport.team2Full} logo`}
                      />
                    </div>
                    <a href={sport.link}>
                      <button className="btn">{sport.time}</button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading sports...</p>
      )}
      <button onClick={() => handleSetLiveSportsOpen()}>Return</button>
    </div>
  );
};

export default LiveSportsView;
