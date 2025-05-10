import React from 'react';
import './App.css';
import Footer from './Footer';

function App() {
  // Links for the buttons
  const links = [
    {
      id: 1,
      title: "How to Register",
      url: "https://www.figma.com/proto/1e5D5kiiP7MSt0G3rMt7LC/DingTalk-Registration-Instructions?node-id=1-2&t=Ga6LZjLBU7WJH5eK-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "✏️"
    },
    {
      id: 2,
      title: "Changing Nickname System Wide",
      url: "https://www.figma.com/proto/U0owGZuI0fQQs5mD06dhoi/DingTalk---System-Wide-Change-Nickname-Instructions?node-id=1-8&t=7aIiTxcY2k0ZnLVZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "📚"
    },
    {
      id: 3,
      title: "Changing Nickname for Group Chat",
      url: "https://www.figma.com/proto/06H670YHUiPOAZ1sMrShgd/DingTalk---Group-Chat-Change-Nickname-Instruction?node-id=1-2&p=f&t=ng6jkxuqCEc1qyqD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icon: "👥"
    }
  ];

  return (
    <div className="app-container">
      <div className="app-card">
        <header className="app-header">
          <div className="logo">
            <span className="logo-icon">📱</span>
          </div>
          <h1>DingTalk Instruction Manual</h1>
          <p className="subtitle">Your complete guide to using DingTalk effectively</p>
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
            <li><span className="step-number">1</span> Click on any link above to open the documentation</li>
            <li><span className="step-number">2</span> Use <span className="key">&lt;</span> and <span className="key">&gt;</span> arrow keys to navigate between pages</li>
          </ul>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;