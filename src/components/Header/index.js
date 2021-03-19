import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo-cecon.png';

function Header() {
  return (
    <Wrapper>
      <Container>
        <header>
          <img src={Logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" activeClassName="active">
                  <a className="nav-link">Quem Somos</a>
                </Link>
              </li>
              <li>
                <Link to="/area-de-atuacao" activeClassName="active">
                  <a className="nav-link">Área de Atuação</a>
                </Link>
              </li>
              <li>
                <Link to="/cursos" activeClassName="active">
                  <a className="nav-link">Cursos</a>
                </Link>
              </li>
              <li>
                <Link to="/politicas-publicas" activeClassName="active">
                  <a className="nav-link">Politica de Publicas</a>
                </Link>
              </li>
              <li>
                <Link to="/programa-de-capacitacao" activeClassName="active">
                  <a className="nav-link">Programa de capacitação</a>
                </Link>
              </li>
              <li>
                <Link to="/contato" activeClassName="active">
                  <a className="nav-link">Contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px #00000029;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 1.5% 0;

  @media (max-width: 1220px) {
    padding: 1% 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }

  img {
    @media (max-width: 1350px) {
      width: 15%;
    }
    @media (max-width: 1120px) {
      display: none;
    }
  }

  header {
    display: flex;
    align-items: center;
  }

  nav {
    padding-left: 9%;
    @media (max-width: 1220px) {
      padding-left: 2%;
    }
    @media (max-width: 1100px) {
      padding-left: 0;
    }
  }

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }

  li {
    padding: 18px;
    text-align: center;
    @media (max-width: 600px) {
      padding: 7px 10px;
    }
  }

  a {
    color: #b4b4b4;
    text-decoration: none;

    font: normal min(20px, 2vw) / 150% Brandon Grotesque;

    &:hover {
      color: #d54216;
    }
  }

  .active.nav-link {
    color: #d54216;
  }
`;
