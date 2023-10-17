// Libraries
import { Routes, Route } from "react-router-dom";

// Context
import Auth from "./context/Auth.tsx";

// Routes
import PrivateRoute from "./routes/PrivateRoute.tsx";

// Pages
import Authentication from "./pages/Authentication/Authentication.tsx";
import Layout from "./pages/Layout/Layout.tsx";

// Constants
import { PagePath } from "./constants/paths/PagePath.ts";

// Styles
import "./styles/app.css";

export default function App() {
  return (
    <Auth>
      <Routes>
        <Route path={PagePath.AUTHENTIFICATION} element={<Authentication />} />
        <Route element={<PrivateRoute redirect={PagePath.AUTHENTIFICATION} />}>
          <Route path={PagePath.HOME} element={<Layout />} />
        </Route>
      </Routes>
    </Auth>
  );
}
