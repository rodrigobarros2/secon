import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImgMapa from '../../assets/icons/mapa-localizacao.svg';

const Cursos = () => (
  <>
    <Container>
      <Header />
      <Wrapper>
        <WrapperText>
          <h1>Descubra onde a Cecon atua</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud.
          </p>
          <h2>sao paulo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud.
          </p>
        </WrapperText>

        <WrapperImage>
          <img src={ImgMapa} alt="" />
        </WrapperImage>
      </Wrapper>

      <Footer />
    </Container>
  </>
);

export default Cursos;

const Container = styled.div`
  background: url('/icons/bg.png');
  height: 100%;
`;

const Wrapper = styled.div`
  height: 75%;
  margin: 5% auto 8% auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

const WrapperText = styled.div`
  width: 38.9%;

  @media (max-width: 1450px) {
    min-width: 326px;
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }

  h1 {
    font: bold min(72px, 4vw) / 109% Brandon Grotesque;
    margin: 0 0 2% 0;
    color: #24282a;
  }

  p {
    font: normal min(30px, 4vw) / 140% Brandon Grotesque;
    margin: 0 0 2% 0;
    color: #24282a;
  }

  h2 {
    font: bold min(35px, 4vw) / 150% Brandon Grotesque;
    margin: 9% 0 0 0;
    color: #0d5775;
    text-transform: uppercase;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5% 0 0 5%;
  width: 59.2%;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
  }
`;
