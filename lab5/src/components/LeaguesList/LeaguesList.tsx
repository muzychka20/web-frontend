import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ILeague } from "../../types";

const LeagueList: React.FC = () => {
  const [leagues, setLeagues] = useState<ILeague[]>([]);

  useEffect(() => {
    axios.defaults.headers["x-rapidapi-host"] =
      "api-football-v1.p.rapidapi.com";
    axios.defaults.headers["x-rapidapi-key"] =
      "******************************";

    axios
      .get("https://api-football-v1.p.rapidapi.com/v2/leagues)")
      .then((res) => {
        setLeagues(res.data.api.leagues);
      });
  }, []);

  return (
    <>
      <ul>
        {leagues.map((league) => (
          <li key={league.league_id}>
            <Link to={`/league/${league.league_id}`} state={{ league }}>
              {league.name} ({league.country})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
