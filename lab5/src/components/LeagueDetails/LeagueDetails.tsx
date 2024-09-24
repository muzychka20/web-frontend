import React from "react";
import { useLocation } from "react-router-dom";
import { ILeague } from "../../types";
import "./LeagueDetails.css";

const LeagueDetails: React.FC = () => {
  let data = useLocation();
  const league: ILeague = data.state.league;

  return (
    <div className="league-card">
      <div className="league-header">
        <img src={league.logo} alt={league.name} className="league-logo" />
        <div className="league-header-country">
          <h2>{league.name}</h2>
          {league.flag && (
            <img
              src={league.flag}
              alt="Country flag"
              className="country-flag"
            />
          )}
        </div>
      </div>
      <div className="league-body">
        <div className="league-info">
          <p>
            <strong>Country:</strong> {league.country || "N/A"}
          </p>
          <p>
            <strong>Type:</strong> {league.type}
          </p>
          <p>
            <strong>Season:</strong> {league.season}
          </p>
          <p>
            <strong>Season Start:</strong>{" "}
            {new Date(league.season_start).toLocaleDateString()}
          </p>
          <p>
            <strong>Season End:</strong>{" "}
            {new Date(league.season_end).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
