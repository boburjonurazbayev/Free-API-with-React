import React from "react";
import "./App.scss";
import useAuth from "./hooks/useAuth";

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";


function App() {
  const [isLoggedIn] = useAuth();

  if (isLoggedIn) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
}

export default App;
