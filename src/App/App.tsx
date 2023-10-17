// Libraries
import { Routes, Route } from "react-router-dom";

// Context
import Auth from "./context/Auth.tsx";

// Routes
import PrivateRoute from "./routes/PrivateRoute.tsx";

// Pages
import Authentication from "./pages/Authentication/Authentication.tsx";
import Home from "./pages/Home.tsx";

// Styles
import "./styles/app.css";
import { PagePath } from "./constants/paths/PagePath.ts";

export default function App() {
  return (
    <Auth>
      <Routes>
        <Route path={PagePath.AUTHENTIFICATION} element={<Authentication />} />
        <Route element={<PrivateRoute redirect={PagePath.AUTHENTIFICATION} />}>
          <Route path={PagePath.HOME} element={<Home />} />
        </Route>
      </Routes>
    </Auth>
  );
}
