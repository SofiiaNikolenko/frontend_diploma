import styled from 'styled-components';

export const Header = styled.header`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  /* color: rgba(255, 255, 255, 1); */
  color: black;
  /* background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08); */
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;

  width: 1262px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const NavListItem = styled.li``;


export const ListAuthentication = styled.ul`
  display: flex;
  gap: 32px;
`;

export const ListAuthenticationItem = styled.li``;

export const ListAuthenticationLink = styled.a``;

export const Login = styled.a`
`;

export const Button = styled.button`
  /* background-color: rgba(141, 211, 187, 1); */
  color: rgba(141, 211, 187, 1);
  /* padding: 12px 25px;
  border-radius: 8px; */
`;
