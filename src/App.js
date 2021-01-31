import React from "react";
import { UserProvider } from "./hooks/userContext";
import Home from "./components/home";
function App() {
  const app = (
    <UserProvider>
      <Home />
    </UserProvider>
  );
  return app;
}

export default App;
