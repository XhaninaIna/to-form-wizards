import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home (CV List)</Link>
            </li>
            <li>
              {/* Make sure spelling of 'wizard' is consistent across all files */}
              <Link to="/wizzard/step-1">Start Wizard</Link>
            </li>
            <li>
              <Link to="/resume-preview">Resume Preview</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {/* Renders the child components */}
        <Outlet />
      </main>
      <footer className="footer">Onboarding Wizard App &copy; 2024</footer>
    </div>
  );
};

export default Layout;
