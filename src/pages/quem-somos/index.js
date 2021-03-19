import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Teachers from '../../components/Teachers';

import ImgPessoaUm from '../../assets/icons/quemsomos-pessoa-um.png';
import ImgPessoaDois from '../../assets/icons/quemsomos-pessoa-dois.png';
import ImgProfessor from '../../assets/icons/professor.png';
import ImgArrowRight from '../../assets/icons/arrow-right.png';
import ImgPredio from '../../assets/icons/predio-quem-somos.png';

const QuemSomos = () => (
  <>
    <Container>
      <Header />
      <Wrapper>
        <Founders>
          <section>
            <h1>Conheça a equipe da Cecon</h1>
            <p>
              Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
              amet vivamus tristique platea a aptent magna donec, condimentum facilisis
              ipsum laoreet aliquet mattis quisque tellus. enim nisl habitant porttitor
              conubia tortor quis lacus
            </p>
          </section>
          <div>
            <img src={ImgPessoaUm} alt="" />
            <h6>Alexia Catharina</h6>
            <span>Fundadora</span>
          </div>
          <div>
            <img src={ImgPessoaDois} alt="" />
            <h6>Ethan Bemerguy</h6>
            <span>Co-Fundadora</span>
          </div>
        </Founders>
        <Abboutemployees>
          <h1>Conheça a equipe de Professores da Cecon</h1>
          <p>
            Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
            amet vivamus tristique platea a aptent magna done facilisis ipsum laoreet
            aliquet mattis quisque tellus.
          </p>
        </Abboutemployees>
        <Employees>
          <Teachers foto={ImgProfessor} nome="Luna Elizabeth" cargo="Assistente Social" />
          <Teachers foto={ImgProfessor} nome="Luna Elizabeth" cargo="Assistente Social" />
          <Teachers foto={ImgProfessor} nome="Luna Elizabeth" cargo="Assistente Social" />
          <Teachers foto={ImgProfessor} nome="Luna Elizabeth" cargo="Assistente Social" />
        </Employees>

        <AboutSecon>
          <h1>Conheça a Cecon</h1>
          <div>
            <div>
              <p>
                Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
                amet vivamus tristique platea a aptent magna donec, condimentum facilisis
                ipsum laoreet aliquet mattis quisque tellus. enim nisl habitant porttitor
                conubia tortor quis lacus tortor amet etiam viverra neque mi ultricies
                magna sed, vivamus torquent
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
                amet vivamus tristique platea a aptent magna donec, condimentum facilisis
                ipsum laoreet aliquet mattis quisque tellus. enim nisl habitant porttitor
                conubia tortor quis lacus tortor amet etiam viverra neque mi ultricies
                magna sed, vivamus torquent
              </p>
              <Link to="/">
                <div className="link">
                  <a>conhaça nossos cursos</a>
                  <img src={ImgArrowRight} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </AboutSecon>

        <ContentPredio>
          <img src={ImgPredio} alt="" />
        </ContentPredio>
      </Wrapper>
      <Footer />
    </Container>
  </>
);

export default QuemSomos;

const Container = styled.div`
  background: url('/icons/bg.png');
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Founders = styled.div`
  display: flex;
  margin-top: 5%;

  > div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
      padding: 2% 0 0 10%;
      font: bold min(30px, 3vw) / 108% Brandon Grotesque;
      color: #24282a;
    }

    span {
      padding-left: 10%;
      font: normal min(25px, 2vw) / 108% Brandon Grotesque;
      color: #24282a;
    }
  }

  section {
    width: 35%;
    @media (max-width: 800px) {
      width: 100%;
    }

    h1 {
      margin: 0 0 2% 0;
      color: #24282a;
      font: bold min(72px, 3vw) / 108% Brandon Grotesque;
    }

    p {
      font: normal min(35px, 1.8vw) / 125% Brandon Grotesque;
      color: #707070;
      @media (max-width: 800px) {
        font: normal min(35px, 2.2vw) / 125% Brandon Grotesque;
      }
    }
  }

  img {
    padding-left: 12%;
    width: 100%;
  }
`;

const ContentPredio = styled.div`
  img {
    width: 100%;
    margin-top: -33%;
    position: relative;
    z-index: -10;
  }
`;

const Abboutemployees = styled.div`
  margin: 8% 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 43.6%;
    color: #24282a;
    font: bold min(72px, 4vw) / 130% Brandon Grotesque;
  }

  p {
    padding: 0px 0 0 5%;
    width: 63.2%;
    color: #707070;
    font: normal min(35px, 2vw) / 120% Brandon Grotesque;
  }
`;

const Employees = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 6%;

  img {
    width: 100%;
  }
`;

const AboutSecon = styled.div`
  margin-top: 4%;

  > div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    width: 100%;
    font: bold min(72px, 5.5vw) / 108% Brandon Grotesque;
    color: #24282a;
  }

  p {
    width: 89.9%;
    color: #24282a;
    font: normal min(35px, 3vw) / 120% Brandon Grotesque;
  }

  a {
    font: bold min(35px, 2vw) / 150% Brandon Grotesque;
    text-decoration: none;
    color: #0d5775;
    text-transform: uppercase;
  }

  img {
    margin: -4px 0 0 12px;
    width: 7%;
  }

  .link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
