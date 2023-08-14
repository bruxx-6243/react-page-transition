import { Link } from "react-router-dom";
import { styled } from "styled-components";

type LinkProps = {
  text: string;
  to: string;
};

type NavLinksProps = LinkProps[];

const navlinks: NavLinksProps = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

const ListLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const LinkItem = styled.li`
  margin: 2rem;
  font-weight: 400;
  font-size: 1.5vw;
`;

const HeaderWrapper = styled.header``;

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <NavWrapper>
          <Logo>
            <Link to="/">Brx.</Link>
          </Logo>

          <ListLinks>
            {navlinks.map((link) => (
              <LinkItem key={link.to}>
                <Link to={link.to}>{link.text}</Link>
              </LinkItem>
            ))}
          </ListLinks>
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
};
