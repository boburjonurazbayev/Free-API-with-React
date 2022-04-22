import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/error/Error"
import Login from "./pages/login/Login";

function UnauthenticatedApp() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />}/>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Error />}/>
      </Routes>
    </>
  );
}

export default UnauthenticatedApp;
