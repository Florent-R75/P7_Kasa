import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavPage = styled.nav`
  display: flex-end;
  text-transform: uppercase;
  font-right: 12px;
  color: $primary-color;
  text-decoration: none;
  padding-left: 0.8rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  margin: 10px;
`;

const StyleNavLink = styled(NavLink)`
  text-decoration: none;
`;
function Nav() {
  return (
    <NavPage>
      <Ul>
        <Li>
          <StyleNavLink to="/">Accueil</StyleNavLink>
        </Li>
        <Li>
          <StyleNavLink to="/about">A Propos</StyleNavLink>
        </Li>
      </Ul>
    </NavPage>
  );
}

export default Nav;
