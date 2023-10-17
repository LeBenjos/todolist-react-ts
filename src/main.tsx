// Librairies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// APP
import App from "./App/App.tsx";
import Auth from "./App/context/Auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth>
      <Router>
        <App />
      </Router>
    </Auth>
  </React.StrictMode>
);
