// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginMaster from "../pages/LoginMaster";
// import Project from "../pages/Project";
// import Home from "../pages/Home";
// import RdoFomrExtensionInative from "../components/RdoForms/RdoFomrExtensionInative";
// import { FormProvider } from "../components/RdoForms/FormContext";
// import GlobalStyle from "../layouts/GlobalStyle";
// import { useForm } from "react-hook-form";
// import PrincipalPreVgb from "../components/RdoForms/Croqui/PrincipalPreVgb";
// import Sidebar from "../components/Sidebar";
// import styled from "styled-components";
// import RegisterCustomer from "../components/RegisterCustomer";
// import RegisterEmployee from "../components/RegisterEmployee";
// import CreateOccupation from "../components/CreateOccupation";
// import CreateOs from "../components/CreateOs";
// import CreateService from "../components/CreateService";
// import GetOss from "../components/GetOSs";
// import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
// import Login from "../pages/Login";
// import HomeCopy from "../pages/HomeCopy";
// import { useState } from "react";
// import Rh from "../pages/Rh";
// import Planner from "../pages/Planner.jsx";
// import MyService from "../components/MyService.jsx";
// import Tecnico from "../pages/Tecnico.jsx";
// import Engenheiro from "../pages/Engenheiro.jsx";
// import RdoPdf from "../components/RdoForms/RdoPdf.jsx";
// // import { Container, Main } from "../layouts/Theme";
// // import { LoginMaster } from "../pages/LoginMaster";



// const Container = styled.div`
//   display: flex;
//   height: 100%;
//   width:100%;
//   background-color: #2c2c2c;
//   color: white;
// `;

// const Main = styled.main`
//   flex: 1;
//   /* padding: 2.5rem; */
//   display: flex;
//   flex-direction: flex  ;
//   /* gap: 2.5rem; */
// `;

// export default function AppRoutes() {
//   const [role, setRole] = useState("")
//   const methods = useForm();
//   return (


//     <Main>
//       <BrowserRouter>
//         <GlobalStyle />
//         <FormProvider {...methods}>

//           {/* <Sidebar></Sidebar> */}
//           <Routes>
//             <Route path="/" element={<LoginMaster />}
//             />
//             <Route path="/login" element={<Login />}
//             />
//             <Route path="/home-copy" element={<HomeCopy />} ></Route>
//             <Route path="/rh" element={<Rh />} ></Route>
//             <Route path="/engenheiro" element={<Engenheiro />} ></Route>
//             <Route path="/tecnico" element={<Tecnico />} ></Route>
//             <Route path="/planner" element={<Planner />} ></Route>

//             <Route path="//pdf/:id" element={<RdoPdf />} ></Route>
//             <Route path="/minhas-notas" element={<MyService />} ></Route>

//               <Route path="/rdo-form/:id" element={<RdoFomrExtensionInative />} />
//               <Route path="/rdo-croqui" element={<PrincipalPreVgb />} />



//             <Route element={<AuthenticatedLayout />}>
//               <Route path="/projetos" element={<Project />} ></Route>
//               <Route path="/home" element={<Home />} ></Route>
//               <Route path="/nota" element={<RdoFomrExtensionInative />} ></Route>
//               <Route path="/clientes" element={<RegisterCustomer />} />

//               {/* ✅ Adicione aqui as novas rotas do ObraSync */}
//               <Route path="/funcionarios" element={<RegisterEmployee />} />
//               <Route path="/ocupacoes" element={<CreateOccupation />} />
//               <Route path="/notas" element={<CreateOs />} />
//               <Route path="/servicos" element={<CreateService />} />
//               <Route path="/ordens" element={<GetOss />} />
//               <Route path="/configuracoes" element={<div>Configurações</div>} />
//             </Route>
//           </Routes>
//         </FormProvider>
//       </BrowserRouter>
//     </Main>
//   )
// }


import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMaster from "../pages/LoginMaster";
import Project from "../pages/Project";
import Home from "../pages/Home";
import { FormProvider } from "../components/RdoForms/FormContext";
import GlobalStyle from "../layouts/GlobalStyle";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import RegisterCustomer from "../components/RegisterCustomer";
import RegisterEmployee from "../components/RegisterEmployee";
import CreateOccupation from "../components/CreateOccupation";
import CreateOs from "../components/CreateOs";
import CreateService from "../components/CreateService";
import GetOss from "../components/GetOSs";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Login from "../pages/Login";
import Rh from "../pages/Rh";
import Planner from "../pages/Planner";
import MyService from "../components/MyService";
import Tecnico from "../pages/Tecnico";
import Engenheiro from "../pages/Engenheiro";
import RdoFomrExtensionInative from "../components/RdoForms/RdoFomrExtensionInative";
import RdoPdf from "../components/RdoForms/RdoPdf";
import PrincipalPreVgb from "../components/RdoForms/Croqui/PrincipalPreVgb";
import PrivateRoute from "./PrivateRoute"; // 👈 novo import
import HomeCopy from "../pages/HomeCopy";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: flex;
`;

export default function AppRoutes() {
  const methods = useForm();

  return (
    <Main>
      <BrowserRouter>
        <GlobalStyle />
        <FormProvider {...methods}>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<LoginMaster />} />
            <Route path="/login" element={<Login />} />

            {/* Rotas protegidas */}
            <Route element={<PrivateRoute />}>
              <Route element={<AuthenticatedLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/projetos" element={<Project />} />
                <Route path="/clientes" element={<RegisterCustomer />} />
                <Route path="/funcionarios" element={<RegisterEmployee />} />
                <Route path="/ocupacoes" element={<CreateOccupation />} />
                <Route path="/notas" element={<CreateOs />} />
                <Route path="/servicos" element={<CreateService />} />
                <Route path="/ordens" element={<GetOss />} />
                <Route path="/configuracoes" element={<div>Configurações</div>} />
                <Route path="/rh" element={<Rh />} />
                <Route path="/engenheiro" element={<Engenheiro />} />
                <Route path="/tecnico" element={<Tecnico />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/minhas-notas" element={<MyService />} />
                <Route path="/rdo-form/:id" element={<RdoFomrExtensionInative />} />
                <Route path="/rdo-croqui" element={<PrincipalPreVgb />} />
                <Route path="/pdf/:id" element={<RdoPdf />} />
                             <Route path="/home-copy" element={<HomeCopy />} ></Route>

              </Route>
            </Route>
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </Main>
  );
}
