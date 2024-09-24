import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ILeague } from "../../types";
import "./LeagueList.css";

const LeagueList: React.FC = () => {
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [leaguesPerPage] = useState<number>(10); // Set the number of leagues to display per page

  useEffect(() => {
    axios.defaults.headers["x-rapidapi-host"] =
      "api-football-v1.p.rapidapi.com";
    axios.defaults.headers["x-rapidapi-key"] =
      "******************************";

    axios
      .get("https://api-football-v1.p.rapidapi.com/v2/leagues")
      .then((res) => {
        setLeagues(res.data.api.leagues);
      });
  }, []);

  // Calculate current leagues to display
  const indexOfLastLeague = currentPage * leaguesPerPage;
  const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;
  const currentLeagues = leagues.slice(indexOfFirstLeague, indexOfLastLeague);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages = Math.ceil(leagues.length / leaguesPerPage);

  // Calculate the range of pages to display
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Determine which page buttons to show
  const displayPageNumbers = () => {
    const maxVisibleButtons = 10;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    return pageNumbers.slice(startPage - 1, endPage);
  };

  return (
    <div className="league-list">
      <ul>
        {currentLeagues.map((league) => (
          <li key={league.league_id} className="league-item">
            <Link
              to={`/league/${league.league_id}`}
              state={{ league }}
              className="league-link"
            >
              {league.name} ({league.country})
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} className="pagination-arrow">
            &lt; {/* Left arrow */}
          </button>
        )}

        {displayPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`pagination-button ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        ))}

        {currentPage < totalPages && (
          <button onClick={() => paginate(currentPage + 1)} className="pagination-arrow">
            &gt; {/* Right arrow */}
          </button>
        )}
      </div>
    </div>
  );
};

export default LeagueList;
