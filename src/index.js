import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PageInfo from "./utils/Pages-infos";

import "./styles/index.css";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Error";

const pageInfo = {
  home: PageInfo.home,
  about: PageInfo.about,
  error: PageInfo.error,
  accommodation: PageInfo.accommodation,
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home pageInfo={pageInfo.home} />} />
        <Route
          path="/accommodation/:id"
          element={<Accommodation pageInfo={pageInfo.accommodation} />}
        />
        <Route path="/about" element={<About pageInfo={pageInfo.about} />} />
        <Route path="/error" element={<Error pageInfo={pageInfo.error} />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
