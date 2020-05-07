/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Header from '../../Header/index';
import Footer from '../../Footer/index';

export default function Index() {
  return (
    <div>
      <main className="home-main">
        <div className="container">
          <Header />

          <section className="home-intro fadeInDown" data-anime="400">
            <div className="row">
              <div className="col-12">
                <h2 className="home-intro-title fadeInDown" data-anime="800">
                  Sabor de Carne
                </h2>
                <p className="home-intro-p">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a className="btn primary-btn" href="churrascaria.html#reserva">
                  Faça sua Reserva!
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="sobre-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8">
              <h2 className="sobre-home-title">Sobre</h2>
              <p className="sobre-home-p">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos.
              </p>
              <a className="btn secondary-btn" href="sobre.html">
                Saiba Mais
              </a>
            </div>
            <div className="col-12 col-sm-4">
              <img src="img/home-sobre.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="menu-home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="menu-home-title">Menu</h2>
            </div>
          </div>
          <div className="row">
            <div className="menu-home-img col-12 col-sm-4">
              <img src="img/home-menu1.jpg" alt="" />
            </div>
            <div className="menu-home-img col-12 col-sm-4">
              <img src="img/home-menu2.jpg" alt="" />
            </div>
            <div className="menu-home-img col-12 col-sm-4">
              <img src="img/home-menu3.jpg" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a className="btn secondary-btn" href="menu.html">
                Veja nosso menu!
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
