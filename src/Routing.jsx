import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import DingTalk from "./instructions/DingTalk";
import FS from "./instructions/Fs";
import "./App.css";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/instructions/DingTalk" element={<DingTalk />} />
        <Route path="/instructions/E-Learning" element={<FS />} />
      </Routes>
    </div>
  );
}

export default Routing;
