// Libraries
import { Routes, Route } from "react-router-dom";

// Context
import Auth, { authContext } from "./context/Auth.tsx";

// Routes
import PrivateRoute from "./routes/PrivateRoute.tsx";

// Pages
import Authentication from "./pages/Authentication/Authentication.tsx";
import Layout from "./pages/Layout/Layout.tsx";

// Constants
import { PagePath } from "./constants/paths/PagePath.ts";

// Styles
import "./styles/app.css";
import { useContext } from "react";
import SideBar from "./components/SideBarComp/SideBar.tsx";

export default function App() {
  const user = useContext(authContext);
  return (
    <div className={user ? "App" : ""}>
      {user && <SideBar />}
      <Routes>
        <Route path={PagePath.AUTHENTIFICATION} element={<Authentication />} />
        <Route element={<PrivateRoute redirect={PagePath.AUTHENTIFICATION} />}>
          <Route path={PagePath.HOME} element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
}
