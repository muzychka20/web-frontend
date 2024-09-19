import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feedback() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <div className="feedback">
      <div className="card text-center">
        <div className="card-header">Hello, {name}!</div>
        <div className="card-body">
          <h5 className="card-title">I will connect with you</h5>
          <p className="card-text">
            via your email: {email} to address your issue: {message}.
          </p>
          <Link type="submit" className="btn btn-primary" to="/profile">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
