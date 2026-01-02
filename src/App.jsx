import React, { useEffect, useState } from "react";
import axiosClient from "./api/axiosClient";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);

    axiosClient
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
     <div className="container mt-4">
      <h2 className="mb-3">User List</h2>

    
      {loading && (
        <div className="spinner-border text-success" role="status">
          <div
            className="visually-hidden"
            style={{ width: "100%" }}
          >
            Loading...
          </div>
        </div>
      )}

    
      {!loading &&
        users.map((u) => (
          <div key={u.id} className="border p-2 mb-2">
            {u.name}
          </div>
        ))}
    </div>
  );
}

export default App;
