import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
    
    // Auto-hide popup after 3 seconds
    if (!showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };
  
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="powered-by-container">
          <div className="logo-container relative">
            <button 
              onClick={togglePopup}
              className="bg-transparent border-0 p-0 flex items-center cursor-pointer"
              aria-label="Show developer information"
            >
              <img 
                src="/lw-logo.jpg" 
                alt="Lifewood Data Technology Limited" 
                className="footer-logo-full"
              />
            </button>
            
            {showPopup && (
              <div className="popup absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg text-center w-48 border border-gray-200">
                <p className="text-sm m-0 font-medium text-gray-700">Powered by vinci@lifewood</p>
                <div className="popup-arrow absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
              </div>
            )}
          </div>
        </div>
        <p className="disclaimer">This documentation is for internal and educational purposes only</p>
        <p className="copyright">© {currentYear} Lifewood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;