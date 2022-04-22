import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AuthenticatedApp;
