// Librairies
import { Routes, Route } from "react-router-dom";

// Routes
import PrivateRoute from "./routes/PrivateRoute.tsx";

// Pages
import Authentication from "./pages/Authentication/Authentication.tsx";
import Layout from "./pages/Layout/Layout.tsx";

// Composants
import CreateProjectForm from "./components/CreateProjectForm/CreateProjectForm.tsx";
import AddMemberForm from "./components/AddMember/AddMember.tsx";

// Constants
import { PagePath } from "./constants/paths/PagePath.ts";

// Styles
import "./styles/app.css";
import Project from "./components/Project/Project.tsx";

export default function App() {
  return (
    <div>
        <Routes>
          <Route
            path={PagePath.AUTHENTIFICATION}
            element={<Authentication />}
          />
          <Route
            element={<PrivateRoute redirect={PagePath.AUTHENTIFICATION} />}
          >
            <Route path={PagePath.HOME} element={<Layout />}>
              <Route path="project/:id" element={<Project />} />
              <Route
                path="project/:id/add_member"
                element={<AddMemberForm />}
              />
              <Route path="create-project" element={<CreateProjectForm />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}
