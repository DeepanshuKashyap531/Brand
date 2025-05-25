// src/pages/AdminPage.jsx
import React, { useState, useEffect } from "react";
import { signOutAdminUser, fetchUsers } from "../../utlis/firebase/firebase.ustil"; 
import "./admin.styles.scss";

const Admin = () => {
  const [users, setUsers] = useState([]); // Always initialize as an empty array
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch users when the component mounts
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const usersData = await fetchUsers(); // Fetch data
        if (Array.isArray(usersData)) {
          setUsers(usersData); // Only set users if it's a valid array
        } else {
          setError("Invalid data received from Firestore.");
        }
      } catch (error) {
        console.error("Error fetching users:", error.message);
        setError("Failed to load users.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    getUsersData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once

  // If loading, show a loading message
  if (loading) {
    return <p>Loading users...</p>;
  }

  // If there's an error, show an error message
  if (error) {
    return <p>{error}</p>;
  }

  // If no users data is fetched, show a message
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <div className="main-area">
        <header className="top-nav">
          <h3>Welcome, Admin</h3>
          {/* Logout button, calling signOutAdminUser function */}
          <button onClick={signOutAdminUser} className="logout-btn">Logout</button>
        </header>

        {/* Table to display user data */}
        <div className="content">
          <h3>Users List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subjects</th>
                <th>Messages</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.subject}</td>
                  <td>{user.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
