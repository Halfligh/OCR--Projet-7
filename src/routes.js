import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Error";
import PageInfo from "./utils/Pages-infos";

const pageInfo = {
  home: PageInfo.home,
  about: PageInfo.about,
  error: PageInfo.error,
  accommodation: PageInfo.accommodation,
};

function AppRoutes() {
  return (
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
  );
}

export default AppRoutes;
