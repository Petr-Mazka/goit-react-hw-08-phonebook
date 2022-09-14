import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #0db87f;
  }
`;
