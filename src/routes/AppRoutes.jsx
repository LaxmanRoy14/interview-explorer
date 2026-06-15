import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import MockInterview from "../pages/MockInterview";
import QuestionDetails from "../pages/QuestionDetails";
import AddQuestion from "../pages/AddQuestion";
import EditQuestion from "../pages/EditQuestion";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/interview/:category" element={<MockInterview />} />

      <Route path="/question/:id" element={<QuestionDetails />} />

      <Route
        path="/add-question"
        element={
          <ProtectedRoute>
            <AddQuestion />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-question/:id"
        element={
          <ProtectedRoute>
            <EditQuestion />
          </ProtectedRoute>
        }
      />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />

      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;
