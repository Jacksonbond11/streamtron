import React, { useState } from "react";
import { useEffect } from "react";

const LiveSportsView = ({ handleSetLiveSportsOpen }) => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const data = await window.electronAPI.getSports();
        setSports(data);
        console.log(sports);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSports();
  }, []);

  return (
    <div>
      <h1>Live Sports:</h1>
      {sports.length > 0 ? (
        <div className="grid grid-cols-3 gap-2">
          {sports.map((sport) => {
            return (
              <div className="w-64 border-2 rounded-md p-2">
                <div className="flex justify-between">
                  <div className="">{sport.team1Full}</div>
                  <img
                    className="w-12"
                    src={`../../assets/${sport.sport}/${sport.team1Short}.png`}
                    alt={`${sport.team1} logo`}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="">{sport.team2Full}</div>
                  <img
                    className="w-12"
                    src={`../../assets/${sport.sport}/${sport.team2Short}.png`}
                    alt={`${sport.team2Short} logo`}
                  />
                </div>
                <a href={sport.link}>
                  <button className="btn">{sport.time}</button>
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <p>"Loading sports"</p>
      )}
      <button onClick={() => handleSetLiveSportsOpen()}>Return</button>
    </div>
  );
};

export default LiveSportsView;
