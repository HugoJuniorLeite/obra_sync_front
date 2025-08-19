import { Route, Routes } from "react-router-dom";
import LoginMaster from "../pages/LoginMaster";
import Project from "../pages/Project";
import Home from "../pages/Home";
// import { LoginMaster } from "../pages/LoginMaster";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginMaster />} />
      <Route path="/projetos" element={<Project />} ></Route>
      <Route path="/home" element={<Home />} ></Route>
    </Routes>
  )
}