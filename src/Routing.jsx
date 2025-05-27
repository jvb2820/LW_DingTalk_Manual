import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import DingTalk from "./instructions/DingTalk";
import FS from "./instructions/Fs";
import Guides from "./instructions/Guides";
import "./App.css";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/instructions/DingTalk" element={<DingTalk />} />
        <Route path="/instructions/E-Learning" element={<FS />} />
        <Route path="/instructions/BasicGuides" element={<Guides/>} />
      </Routes>
    </div>
  );
}

export default Routing;
