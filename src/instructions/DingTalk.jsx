import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./DingTalk.css";

const DingTalk = () => {
  const links = [
    {
      id: 1,
      title: "1.1 How to Register",
      url: "https://www.figma.com/proto/1e5D5kiiP7MSt0G3rMt7LC/DingTalk-Registration-Instructions?node-id=1-2&t=Ga6LZjLBU7WJH5eK-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "✏️",
    },
    {
      id: 2,
      title: "1.2 Changing Nickname System Wide",
      url: "https://www.figma.com/proto/U0owGZuI0fQQs5mD06dhoi/DingTalk---System-Wide-Change-Nickname-Instructions?node-id=1-8&t=7aIiTxcY2k0ZnLVZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "📚",
    },
    {
      id: 3,
      title: "1.3 Changing Nickname for Group Chat",
      url: "https://www.figma.com/proto/06H670YHUiPOAZ1sMrShgd/DingTalk---Group-Chat-Change-Nickname-Instruction?node-id=1-2&p=f&t=ng6jkxuqCEc1qyqD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "👥",
    },
    {
      id: 4,
      title: "1.4 How to Change the Language to English",
      url: "https://www.figma.com/proto/or4TbDlenffn9fRXGcy67r/How-To-Change-language-in-DingTalk?node-id=1-2&t=jgPjt4SuBi6MyQj4-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "🌐",
    },
    {
      id: 5,
      title: "1.6 How To Add Another User Using A QR Code",
      url: "https://www.figma.com/proto/mlgZG9u1uToNKQ323C4yWH/How-To-Add-Another-User-Using-A-QR-Code?node-id=0-1&t=0E0fIR2kHpp6p1HK-1",
      icon: "⛆",
    },
    {
      id: 6,
      title: "2.1 How to Register (Android)",
      url: "https://www.figma.com/proto/MfahTocxU5rDSixRY99WVH/DingTalk-Register-and-Login-Guide-for-Android?node-id=1-3&t=ItHpr4UpUvgdLX9p-1",
      icon: "✏️",
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

            <h1>DingTalk Instruction Manual</h1>
            <p className="subtitle">
              Your complete guide to using DingTalk effectively
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

export default DingTalk;
