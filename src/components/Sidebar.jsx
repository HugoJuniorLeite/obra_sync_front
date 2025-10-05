// // src/components/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { FaUser, FaFolderOpen, FaCog, FaClipboardList, FaFileInvoice, FaTools } from "react-icons/fa";
// import styled from "styled-components";

// const SidebarWrapper = styled.aside`
//   width: 16rem;
//   background-color: #1e1e1e;
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   height: 100vh;
//   box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #f59e0b;
//   margin-bottom: 1rem;
//   padding-bottom: 1rem;
//   border-bottom: 1px solid #333;
// `;

// const NavItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   color: #d1d5db;
//   text-decoration: none;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   transition: all 0.2s ease;

//   &:hover {
//     color: white;
//     background-color: #2d2d2d;
//   }

//   &.active {
//     font-weight: bold;
//     color: white;
//     background-color: #2d2d2d;

//     svg {
//       color: #f59e0b;
//     }
//   }
// `;

// export default function Sidebar() {
//   return (
//     <SidebarWrapper>
//       <Logo>ObraSync</Logo>
//       <nav>
//         <NavItem to="/clientes">
//           <FaUser /> Clientes
//         </NavItem>
//         <NavItem to="/funcionarios">
//           <FaUser /> Funcionários
//         </NavItem>
//         <NavItem to="/projetos">
//           <FaFolderOpen /> Projetos
//         </NavItem>
//         <NavItem to="/servicos">
//           <FaTools /> Cadastrar Serviço
//         </NavItem>
//         <NavItem to="/ocupacoes">
//           <FaClipboardList /> Cadastrar Ocupação
//         </NavItem>
//         <NavItem to="/notas">
//           <FaFileInvoice /> Emitir OS
//         </NavItem>
//         <NavItem to="/ordens">
//           <FaClipboardList /> Programação
//         </NavItem>
//         <NavItem to="/configuracoes">
//           <FaCog /> Configurações
//         </NavItem>
//       </nav>
//     </SidebarWrapper>
//   );
// }


// import { useContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import { menuItems } from "../routes/menuItems";
// import styled from "styled-components";

// const SidebarContainer = styled.aside`
//   width: 240px;
//   background-color: #1f1f1f;
//   color: white;
//   min-height: 100vh;
//   padding: 1rem;
// `;

// const MenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const MenuItem = styled.li`
//   margin: 0.5rem 0;

//   a {
//     text-decoration: none;
//     color: white;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     padding: 0.5rem;
//     border-radius: 4px;

//     &:hover {
//       background-color: #333;
//     }

//     &.active {
//       background-color: #444;
//     }
//   }
// `;

// const SubMenuList = styled.ul`
//   list-style: none;
//   padding-left: 1.5rem;
//   margin: 0.3rem 0;
// `;

// export default function Sidebar() {
//   const { user } = useContext(AuthContext);
//   const location = useLocation();
//   const [openMenus, setOpenMenus] = useState({});

//   if (!user) return null;

//   const toggleSubMenu = (label) => {
//     setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
//   };

//   const renderMenuItem = (item) => {
//     const Icon = item.icon;

//     // verifica se o usuário tem acesso
//     if (!item.occupation.includes(user.occupation)) return null;

//     if (item.submenu) {
//       return (
//         <MenuItem key={item.label}>
//           <div
//             style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}
//             onClick={() => toggleSubMenu(item.label)}
//           >
//             {Icon && <Icon />}
//             {item.label}
//           </div>
//           {openMenus[item.label] && (
//             <SubMenuList>
//               {item.submenu.map((sub) => {
//                 if (!sub.occupation.includes(user.occupation)) return null;
//                 const SubIcon = sub.icon;
//                 return (
//                   <li key={sub.label}>
//                     <Link
//                       to={sub.path}
//                       className={location.pathname.startsWith(sub.path) ? "active" : ""}
//                     >
//                       {SubIcon && <SubIcon />}
//                       {sub.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </SubMenuList>
//           )}
//         </MenuItem>
//       );
//     }

//     return (
//       <MenuItem key={item.label}>
//         <Link to={item.path} className={location.pathname.startsWith(item.path) ? "active" : ""}>
//           {Icon && <Icon />}
//           {item.label}
//         </Link>
//       </MenuItem>
//     );
//   };

//   return (
//     <SidebarContainer>
//       <MenuList>
//         {menuItems.map(renderMenuItem)}
//       </MenuList>
//     </SidebarContainer>
//   );
// }


import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, LogOut } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";
import { menuItems } from "../routes/menuItems";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Deseja realmente sair?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <motion.div
      animate={{ width: isOpen ? 220 : 70 }}
      className="h-screen bg-gray-900 text-white shadow-xl flex flex-col justify-between transition-all duration-300"
    >
      {/* TOPO */}
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-800 transition"
          >
            <Menu size={22} />
          </button>
          {isOpen && <h1 className="text-xl font-semibold">ObraSync</h1>}
        </div>

        {/* MENU */}
        <nav className="mt-4 flex flex-col gap-1">
          {menuItems
            .filter((item) => item.roles.includes(user?.occupation))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 mx-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600"
                      : "hover:bg-gray-800 hover:text-blue-400"
                  }`
                }
              >
                <item.icon size={20} />
                {isOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
        </nav>
      </div>

      {/* RODAPÉ */}
      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 transition w-full"
        >
          <LogOut size={20} />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </motion.div>
  );
}
