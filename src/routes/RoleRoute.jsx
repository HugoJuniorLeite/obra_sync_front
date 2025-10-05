// src/routes/RoleRoute.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// allowedRoles = array de occupation.id permitidos
export default function RoleRoute({ allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // não está logado
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.occupation)) {
    // não tem permissão
    return <Navigate to="/home" replace />;
  }

  return <Outlet />; // renderiza as rotas filhas
}
