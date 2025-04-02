import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
