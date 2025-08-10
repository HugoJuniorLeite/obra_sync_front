import React from "react";
import { FaUser, FaFolderOpen, FaCog } from "react-icons/fa";
import styled from "styled-components";

const SidebarWrapper = styled.aside`
  width: 16rem;
  background-color: #1e1e1e;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const ActiveNavItem = styled(NavItem)`
  font-weight: bold;
  color: white;

  svg {
    color: #f59e0b;
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Logo>ObraSync</Logo>
      <nav>
        <NavItem><FaUser /> Clientes</NavItem>
        <ActiveNavItem><FaFolderOpen /> Projetos</ActiveNavItem>
        <NavItem><FaCog /> Configurações</NavItem>
      </nav>
    </SidebarWrapper>
  );
}
