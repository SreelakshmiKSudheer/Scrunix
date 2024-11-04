// App.js
import React from "react";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SCRUTINIX</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#announcements">Announcements</a>
        <a href="#exams">Exams</a>
        <a href="#profile">Profile</a>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h2>LOG IN</h2>
      <div className="notification">
        <span className="bell-icon">🔔</span>
        <span className="profile-icon">👤</span>
      </div>
    </header>
  );
}

function LoginForm() {
  return (
    <div className="login-form">
      <label>Username</label>
      <input type="text" placeholder="Username" />
      <label>Password</label>
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <a href="#register" className="register-link">Not a User?</a>
    </div>
  );
}

function RoleButtons() {
  return (
    <div className="role-buttons">
      <button>Admin</button>
      <button>HOD</button>
      <button>Faculty</button>
      <button>Exam Coord</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <LoginForm />
        <RoleButtons />
      </div>
    </div>
  );
}

export default App;
