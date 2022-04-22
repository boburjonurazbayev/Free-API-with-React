import React from "react";
import { Context } from "../context/Authenticaion";

const useAuth = (setterOnly=false) => {
  const ctx = React.useContext(Context);
  return setterOnly ? [ctx.setToken] : [ctx.token, ctx.setToken];
};

export default useAuth;
