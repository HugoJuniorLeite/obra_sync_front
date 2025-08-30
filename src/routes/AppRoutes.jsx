import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMaster from "../pages/LoginMaster";
import Project from "../pages/Project";
import Home from "../pages/Home";
import RdoFomrExtensionInative from "../components/RdoForms/RdoFomrExtensionInative";
import { FormProvider } from "../components/RdoForms/FormContext";
import GlobalStyle from "../layouts/GlobalStyle";
import { useForm } from "react-hook-form";
// import { LoginMaster } from "../pages/LoginMaster";

export default function AppRoutes() {
   const methods = useForm();
  return (

    <BrowserRouter>
      <GlobalStyle />
      <FormProvider {...methods}>
        <Routes>
          <Route path="/" element={<LoginMaster />} />
          <Route path="/projetos" element={<Project />} ></Route>
          <Route path="/home" element={<Home />} ></Route>
          {/* <Route path="/nota" element={<RdoFomrExtensionInative />} ></Route> */}
          <Route path="/rdo-form/:id" element={<RdoFomrExtensionInative />} />


        </Routes>
      </FormProvider>
    </BrowserRouter>
  )
}