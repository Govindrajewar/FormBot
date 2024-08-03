import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Settings from "./pages/Settings";
import Workspace from "./pages/Workspace";
import PostLogin from "./pages/PostLogin";
import Desktop from "./pages/Desktop";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/postlogin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PostLogin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workspace"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Workspace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/desktop"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Desktop />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
