import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=5") // Fetch 5 users
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">User Fetcher</h1>
      <button className="btn btn-primary mb-4" onClick={fetchUsers}>
        Fetch Users
      </button>

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
    </div>
  );
}
