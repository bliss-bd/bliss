import { getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../../Firebase/firebase.config";

export const userContext = createContext();
const auth = getAuth(app);

const Usercontexts = ({ children }) => {
  // user
  const [user, setUser] = useState("akash");

  const info = {
    user,
  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default Usercontexts;
