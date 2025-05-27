// Guides.jsx
import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./DingTalk.css";

const Guides = () => {
  const links = [
    {
      id: 1,
      title: "3.1 How To Create A Local User Using the Assigned UserID",
      url: "https://www.figma.com/proto/Inkont0IBOvCexoXE1H9Yq/How-To-Create-A-Local-User-Using-the-Assigned-UserID?node-id=0-1&t=Qarfjq2ofyFxuFTD-1",
      icon: "💻",
    },
  ];

  return (
    <div>
      <div className="app-container">
        <div className="app-card">
          <header className="app-header">
            <div className="logo">
              <span className="logo-icon">📱</span>
            </div>

            <h1>E-Learning Platform</h1>
            <p className="subtitle">
              Your complete guide to using FS effectively
            </p>
            <Link to="/" className="back-button">
              ← Back
            </Link>
          </header>
          <main className="button-container">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="link-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon">{link.icon}</span>
                <span className="button-text">{link.title}</span>
              </a>
            ))}
          </main>
          <section className="navigation-guide">
            <h2>How to Navigate</h2>
            <ul className="guide-steps">
              <li>
                <span className="step-number">1</span> Click on any link above
                to open the documentation
              </li>
              <li>
                <span className="step-number">2</span> Use{" "}
                <span className="key">&lt;</span> and{" "}
                <span className="key">&gt;</span> arrow keys to navigate between
                pages
              </li>
            </ul>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Guides;
2