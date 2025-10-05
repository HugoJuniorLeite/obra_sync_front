import { FaHome, FaProjectDiagram, FaUser, FaUsers, FaClipboard, FaFilePdf, FaTools, FaUserTie, FaChartLine, FaFolderOpen } from "react-icons/fa";

export const menuItems = [
  {
    label: "Home",
    path: "/home",
    icon: FaHome,
    roles: [2, 4, 5],
  },
  {
    label: "Projetos",
    path: "/projetos",
    icon: FaProjectDiagram,
    roles: [2, 4, 5],
  },
  {
    label: "Clientes",
    path: "/clientes",
    icon: FaUser,
    roles: [2, 4, 5],
  },
  {
    label: "Funcionários",
    path: "/funcionarios",
    icon: FaUsers,
    roles: [2, 4, 5, 6],
  },
  {
    label: "Ocupações",
    path: "/ocupacoes",
    icon: FaUserTie,
    roles: [2, 4, 5, 6],
  },
  {
    label: "Notas",
    path: "/notas",
    icon: FaClipboard,
    roles: [2, 4, 5, 3],
  },
  {
    label: "Serviços",
    path: "/servicos",
    icon: FaTools,
    roles: [2, 4, 5],
  },
  {
    label: "Ordens",
    path: "/ordens",
    icon: FaClipboard,
    roles: [2, 4, 5, 3],
  },
  {
    label: "RDO",
    icon: FaFolderOpen,
    roles: [1, 7, 8, 2, 4, 5],
    submenu: [
      {
        label: "Minhas Notas",
        path: "/minhas-notas",
        icon: FaClipboard,
        roles: [1, 7, 8, 2, 4, 5],
      },
      {
        label: "RDO Form",
        path: "/rdo-form",
        icon: FaFilePdf,
        roles: [1, 7, 8, 2, 4, 5],
      },
      {
        label: "RDO Croqui",
        path: "/rdo-croqui",
        icon: FaChartLine,
        roles: [1, 7, 8, 2, 4, 5],
      },
      {
        label: "PDF",
        path: "/pdf",
        icon: FaFilePdf,
        roles: [1, 7, 8, 2, 4, 5],
      },
    ],
  },
  {
    label: "RH",
    path: "/rh",
    icon: FaUserTie,
    roles: [2, 4, 5],
  },
  {
    label: "Planner",
    path: "/planner",
    icon: FaChartLine,
    roles: [2, 4, 5],
  },
];
