import { FaHome, FaProjectDiagram, FaUser, FaUsers, FaClipboard, FaFilePdf, FaTools, FaUserTie, FaChartLine, FaFolderOpen } from "react-icons/fa";

export const menuItems = [
  {
    label: "Home",
    path: "/home",
    icon: FaHome,
    occupation: [2, 4, 5],
  },
  {
    label: "Projetos",
    // path: "/projetos",
    icon: FaProjectDiagram,
    occupation: [2, 4, 5],
      submenu: [
  {
    label: "Clientes",
    path: "/clientes",
    icon: FaUser,
    occupation: [2, 4, 5],
  },
  {
    label: "Serviços",
    path: "/servicos",
    icon: FaTools,
    occupation: [2, 4, 5],
  },
      ]
  },
  {
    label: "RDO",
    icon: FaFolderOpen,
    occupation: [1, 7, 8, 2, 4, 5],
    submenu: [
      {
        label: "Minhas Notas",
        path: "/minhas-notas",
        icon: FaClipboard,
        occupation: [1, 7, 8, 2, 4, 5],
      },
    ],
  },
  {
    label: "RH",
    // path: "/rh",
    icon: FaUserTie,
    occupation: [2, 4, 5],
  submenu: [
     {
    label: "Funcionários",
    // path: "/funcionarios",
    icon: FaUsers,
    // occupation: [2, 4, 5, 6],
      submenu: [
     {
    label: "Cadastrar",
    path: "/funcionarios",
    icon: FaUsers,
    occupation: [2, 4, 5, 6],
  },
    {
    label: "Listar",
    path: "/ocupacoes",
    icon: FaUserTie,
    occupation: [2, 4, 5, 6],
  },
]
  },
  },
    {
    label: "Ocupações",
    path: "/ocupacoes",
    icon: FaUserTie,
    occupation: [2, 4, 5, 6],
  },
]
  },
  {
    label: "Planner",
    // path: "/planner",
    icon: FaChartLine,
    occupation: [2, 4, 5],
    submenu: [
  {
    label: "Notas",
    path: "/notas",
    icon: FaClipboard,
    occupation: [2, 4, 5, 3],
  },

  {
    label: "Ordens",
    path: "/ordens",
    icon: FaClipboard,
    occupation: [2, 4, 5, 3],
  },

    ]
  },
];
