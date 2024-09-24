import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeagueList from "./components/LeagueList/LeagueList";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeagueList />} />
        <Route path="/league/:id" element={<LeagueDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
