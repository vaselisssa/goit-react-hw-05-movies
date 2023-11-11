import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: #48bb78;
  z-index: 1;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    text-shadow: 3px 3px 20px #fff, -2px 1px 30px #fff;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
