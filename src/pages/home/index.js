import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarrouselTeste from '../../assets/icons/carrouselteste.png';
import ImgPredio from '../../assets/icons/predio.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import ImgArrowRight from '../../assets/icons/arrow-right.png';
import ImgOpenBook from '../../assets/icons/open-book.svg';
import ImgAssistenciaSocial from '../../assets/icons/assistencia-social.svg';
import ImgMonitor from '../../assets/icons/monitor.svg';

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <WrapperCarousel>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              interval={6000}
              transitionTime={500}
              infiniteLoop
              autoPlay
              emulateTouch
              dynamicHeight
              swipeable
            >
              <div>
                <img src={CarrouselTeste} alt="CarrouselTeste" />
              </div>
              <div>
                <img src={CarrouselTeste} alt="CarrouselTeste" />
              </div>
              <div>
                <img src={CarrouselTeste} alt="CarrouselTeste" />
              </div>
            </Carousel>
          </WrapperCarousel>
          <WrapperStory>
            <h2>Conheça mais sobre a história da Cecon</h2>

            <img src={ImgPredio} alt="Imagem Predio" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud.
              <Link to="/">
                <div>
                  <a>saiba mais</a>
                  <img src={ImgArrowRight} alt="" className="arrow-right" />
                </div>
              </Link>
            </p>
          </WrapperStory>
          <WrapperCouses>
            <ItemCouses>
              <div>
                <div className="container-image">
                  <img src={ImgOpenBook} alt="Livro" />
                </div>
                <span>educação</span>
              </div>
              <div>
                <div className="container-image">
                  <img src={ImgAssistenciaSocial} alt="Assistencia Social" />
                </div>
                <span>assistente social</span>
              </div>
              <div>
                <div className="container-image">
                  <img src={ImgMonitor} alt="Monitor" />
                </div>
                <span>tecnologia</span>
              </div>
            </ItemCouses>
            <AboutCourses>
              <h3>Cursos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </AboutCourses>
          </WrapperCouses>
          <EmailSection>
            <h4>Receba nossas novidades por e-mail</h4>
            <div className="wapper-content">
              <Input name="Email" placeholder="Email" />
              <Button />
            </div>
          </EmailSection>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  background: url('/icons/bg.png');
  > div {
    box-shadow: none;
  }
`;

const Wrapper = styled.div`
  width: 83%;
  margin: 0 auto;
`;

const WrapperCarousel = styled.div`
  margin-right: -7%;
  .carousel.carousel-slider {
    display: flex;
    flex-direction: row-reverse;
  }

  .carousel .control-dots {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: none;
  }

  .dot {
    padding: 5px;
  }

  .selected {
    background: #ffa747 !important;
    border: none;
  }

  .carousel .control-dots .dot {
    opacity: 1;
    margin: 13px 8px;
    background: #dcd9d9;
    box-shadow: 0px 3px 6px #00000029;
    border: none;
  }

  .control-dots {
    position: static;
    width: 60px;
    border: none;
  }
`;

const WrapperStory = styled.section`
  margin: 10% auto 0 auto;
  align-items: center;
  display: flex;

  @media (max-width: 1550px) {
    margin: 5% auto 0 auto;
  }

  h2 {
    font: bold min(72px, 4vw) / 108% Brandon Grotesque;
    text-align: right;
    color: #24282a;
    width: 37.2%;
    margin: -8% -6% 0 0;
    z-index: 1;
  }

  p {
    font: normal min(35px, 3vw) / 108% Brandon Grotesque;
    margin: 16% 0 0 2%;
    display: block;
    width: 36%;
    letter-spacing: 0px;
    color: #24282a;
  }

  img {
    width: 35%;
  }

  a {
    font: bold min(30px, 2.5vw) / 140% Brandon Grotesque;
    display: block;
    color: #0d5775;
    text-transform: uppercase;
    text-decoration: none;
  }

  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    img {
      margin: -0.8% 0 0 4%;
      width: 10%;
    }
  }
`;

const WrapperCouses = styled.section`
  margin: 10% 0;
  display: flex;
  justify-content: space-between;
`;

const ItemCouses = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }

  img {
    min-width: 40% !important;
  }

  span {
    font: bold min(30px, 3vw) / 108% Brandon Grotesque;
    color: #24282a;
    text-transform: uppercase;
    margin-left: 6%;
  }

  .container-image {
    min-width: 15.7%;
    max-width: 15.7%;
    background-color: #d54216;
    border-radius: 100px;
    display: flex;
    align-items: center;
  }
`;

const AboutCourses = styled.section`
  padding: 0 0 0 5%;
  width: 156%;

  h3 {
    font: bold min(72px, 5vw) / 144% Brandon Grotesque;
    color: #24282a;
  }

  p {
    font: normal min(35px, 3vw) / 143% Brandon Grotesque;
    color: #24282a;
  }
`;

const EmailSection = styled.section`
  width: 100%;
  display: flex;
  margin: 0 0 5% 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  h4 {
    width: 38%;
    font: bold min(60px, 3.5vw) / 127% Brandon Grotesque;
    color: #24282a;
    @media (max-width: 900px) {
      width: 100%;
      font-size: min(60px, 3.5vw);
    }
  }

  .wapper-content {
    justify-content: space-between;
    width: 54%;
    display: flex;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;
