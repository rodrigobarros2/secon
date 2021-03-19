import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ImgLogoCecon from '../../assets/icons/logo-cecon.png';
import ImgEmail from '../../assets/icons/email.png';
import ImgContato from '../../assets/icons/contato.png';
import ImgTelefone from '../../assets/icons/telefone.png';
import ImgLocalizacao from '../../assets/icons/localizacao.png';
import ImgFacebook from '../../assets/icons/facebook.png';
import ImgInstagram from '../../assets/icons/instagram.png';
import ImgTwitter from '../../assets/icons/twitter.png';

import Logo from '../../assets/icons/logo-sorocaba-com.svg';

const Footer = () => (
  <Container>
    <footer>
      <WrapperLogo>
        <img src={ImgLogoCecon} alt="" srcSet="" />
      </WrapperLogo>
      <nav>
        <ul>
          <li>
            <a href="">Footer</a>
          </li>
          <li>
            <a href="">Quem somo</a>
          </li>
          <li>
            <a href="">Área de atuação</a>
          </li>
          <li>
            <a href="">Cursos</a>
          </li>
          <li>
            <a href="">Política de Públicas</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      <WrapperResponsive>
        <Contato>
          <ul>
            <li>
              <a href="">
                <img className="img-contato" src={ImgEmail} alt="" />
                <span>contato@secon.com.br</span>
              </a>
            </li>
            <li>
              <a href="">
                <img className="img-cnpj" src={ImgContato} alt="" />
                <span>CNPJ 22.2984.8474./9451-56</span>
              </a>
            </li>
            <li>
              <a href="">
                <img className="img-numero" src={ImgTelefone} alt="" />
                <span>(11) 367 - 9191</span>
              </a>
            </li>
            <li>
              <a href="">
                <img className="img-localidade" src={ImgLocalizacao} alt="" />
                <span>
                  Avenida Anápolis. 100 - Conj. 704 -Betaville - Barueri - São Paulo/SP
                  CEP 06404-250
                </span>
              </a>
            </li>
          </ul>
        </Contato>
        <SocialMedia>
          <div>
            <Link to="/">
              <a>
                <img src={ImgFacebook} alt="" />
              </a>
            </Link>

            <Link to="/">
              <a>
                <img src={ImgInstagram} alt="" />
              </a>
            </Link>
            <Link to="/">
              <a>
                <img src={ImgTwitter} alt="" />
              </a>
            </Link>
          </div>
        </SocialMedia>
      </WrapperResponsive>
    </footer>
    <Copyright>
      <hr />
      <div>
        <p>©2020 Cecon, Todos os direitos reservados</p>
        <img src={Logo} alt="" />
      </div>
    </Copyright>
  </Container>
);

export default Footer;

const Container = styled.div`
  background: #f8f8f8;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > footer {
    display: flex;
    width: 85%;
    margin: 0 auto;
    height: 100%;
  }

  nav {
    width: 32%;
    padding: 0 0 0 7.1%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      padding-left: 3%;
    }
    li {
      margin: 0 0 2% 0;
    }
  }

  ul {
    list-style: none;
    padding: 20% 0;

    a {
      font: normal min(20px, 1.5vw) / 150% Open Sans;
      color: #0d5775;
      text-decoration: none;
    }
  }
`;

const Contato = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 7.1%;
  @media (max-width: 768px) {
    .img-contato {
      width: 10%;
    }
    .img-cnpj {
      width: 8%;
    }
    .img-numero {
      width: 12%;
    }
    .img-localidade {
      width: 3%;
    }
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 0 1% 0;
    @media (max-width: 768px) {
      margin: 0 0 2% 0;
    }
  }

  a {
    list-style: none;
    border: none;
    display: flex;
    align-items: center;
  }

  span {
    margin: 0 0 0 14px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  > div {
    margin-top: -100%;
    display: flex;
    align-items: center;

    a {
      padding: 0px 0 0 7%;
    }

    @media (max-width: 768px) {
      padding: 0 0 0 0.3%;
      margin: -18% auto 0px auto;
      a {
        width: 15%;
      }
      img {
        width: 50%;
      }
    }
    @media (max-width: 600px) {
      margin: -21% auto 0px auto;
    }
  }

  img {
    width: 60%;
  }
`;

const Copyright = styled.div`
  width: 85%;
  margin: 0 auto 2% auto;

  > div {
    margin: 2% auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: #0d5775;
    font: normal min(20px, 2vw) / 150% Open Sans;
  }

  img {
    width: 16.3%;
  }
`;

const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24.6%;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const ContatoAndSocial = styled.div``;

const WrapperResponsive = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
