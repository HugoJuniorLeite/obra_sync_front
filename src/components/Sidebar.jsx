// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaUser, FaFolderOpen, FaCog, FaClipboardList, FaFileInvoice, FaTools } from "react-icons/fa";
import styled from "styled-components";

const SidebarWrapper = styled.aside`
  width: 16rem;
  background-color: #1e1e1e;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background-color: #2d2d2d;
  }

  &.active {
    font-weight: bold;
    color: white;
    background-color: #2d2d2d;

    svg {
      color: #f59e0b;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Logo>ObraSync</Logo>
      <nav>
        <NavItem to="/clientes">
          <FaUser /> Clientes
        </NavItem>
        <NavItem to="/funcionarios">
          <FaUser /> Funcionários
        </NavItem>
        <NavItem to="/projetos">
          <FaFolderOpen /> Projetos
        </NavItem>
        <NavItem to="/servicos">
          <FaTools /> Cadastrar Serviço
        </NavItem>
        <NavItem to="/ocupacoes">
          <FaClipboardList /> Cadastrar Ocupação
        </NavItem>
        <NavItem to="/notas">
          <FaFileInvoice /> Emitir OS
        </NavItem>
        <NavItem to="/ordens">
          <FaClipboardList /> Programação
        </NavItem>
        <NavItem to="/configuracoes">
          <FaCog /> Configurações
        </NavItem>
      </nav>
    </SidebarWrapper>
  );
}