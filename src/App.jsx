import React from "react";
import "./App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function App() {
  // Links for the buttons
  const links = [
    {
      id: 1,
      title: "Dintalk Manual",
      path: "/instructions/DingTalk",
      icon: "✏️",
    },
    {
      id: 2,
      title: "FS Manual",
      path: "/instructions/FS",
      icon: "✏️",
    },
  ];

  return (
    <div className="app-container">
      <div className="app-card">
        <header className="app-header">
          <div className="logo">
            <span className="logo-icon">📱</span>
          </div>
          <h1>Lifewood Project & Operations Manual</h1>
          <p className="subtitle">
            A comprehensive guide to company projects, tools, and essential
            resources
          </p>
        </header>

        <main className="button-container">
          {links.map((link) => (
            <Link key={link.id} to={link.path} className="link-button">
              <span className="button-icon">{link.icon}</span>
              <span className="button-text">{link.title}</span>
            </Link>
          ))}
        </main>

        <section className="navigation-guide">
          <h2>How to Navigate</h2>
          <ul className="guide-steps">
            <li>
              <span className="step-number">1</span> Click on any link above to
              open the documentation
            </li>
          </ul>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
