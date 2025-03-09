import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // New loading state

  const fetchUsers = () => {
    setLoading(true); // Start loading
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false); // Stop loading
      })
      .catch(() => setLoading(false)); // Stop loading on error
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">User Fetcher</h1>
      <button className="btn btn-primary mb-4" onClick={fetchUsers}>
        Fetch Users
      </button>

      {/* Show blinking message while loading */}
      {loading && <p className="blink-text">Fetching data... Please wait</p>}

      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg p-3">
              <img
                src={user.picture.large}
                alt="Profile"
                className="card-img-top rounded-circle mx-auto"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text text-muted">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blinking effect CSS */}
      <style>
        {`
          .blink-text {
            font-size: 18px;
            color: red;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
