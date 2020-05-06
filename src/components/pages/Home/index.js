import React from 'react';

import Header from './../../Header/index';

export default function Index() {
    return(
        <>   
            <main className="home-main">
                <div class="container">
                    <Header />
                    
                    <section class="home-intro fadeInDown" data-anime="400">   
                        <div class="row">
                            <div class="col-12">
                                <h2 class="home-intro-title fadeInDown" data-anime="800">Sabor de Carne</h2>
                                <p class="home-intro-p">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a class="btn primary-btn" href="churrascaria.html#reserva">Faça sua Reserva!</a>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </main>

            <!-- section sobre -->
            <section class="sobre-home">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-8">
                            <h2 class="sobre-home-title">Sobre</h2>
                            <p class="sobre-home-p">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica 
                                e de impressos, e vem sendo utilizado desde o século XVI, quando um 
                                impressor desconhecido pegou uma bandeja de tipos e os embaralhou para 
                                fazer um livro de modelos de tipos.</p>
                            <a class="btn secondary-btn" href="sobre.html">Saiba Mais</a>
                        </div>
                        <div class="col-12 col-sm-4">
                            <img src="img/home-sobre.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- fim do sobre -->

            <!-- section menu -->
            <section class="menu-home">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="menu-home-title">Menu</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="menu-home-img col-12 col-sm-4">
                            <img src="img/home-menu1.jpg" alt="">
                        </div>
                        <div class="menu-home-img col-12 col-sm-4">
                            <img src="img/home-menu2.jpg" alt="">
                        </div>
                        <div class="menu-home-img col-12 col-sm-4">
                            <img src="img/home-menu3.jpg" alt="">
                        </div>                   
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <a class="btn secondary-btn" href="menu.html">Veja nosso menu!</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- fim menu -->

            <!-- footer -->
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h3 class="footer-titles">Mapa do Site</h3>
                            <ul class="footer-nav">
                                <li class="footer-nav-item"><a class="footer-nav-link active" href="index.html">Inicio</a></li>
                                <li class="footer-nav-item"><a class="footer-nav-link" href="churrascaria.html">Churrascaria</a></li>
                                <li class="footer-nav-item"><a class="footer-nav-link" href="menu.html">Menu</a></li>
                                <li class="footer-nav-item"><a class="footer-nav-link" href="sobre.html">Sobre</a></li>
                                <li class="footer-nav-item"><a class="footer-nav-link" href="contato.html">Contato</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-4">
                            <h3 class="footer-titles">Redes Sociais</h3>
                            <div class="social-medias">
                                <a class="social-medias-link" href="https://facebook.com" target="blank"><img src="img/icons/001-facebook.svg" alt="Icone Facebook"></a>
                                <a class="social-medias-link" href="https://instagram.com" target="blank"><img src="img/icons/002-instagram.svg" alt="Icone Instagram"></a>
                                <a class="social-medias-link" href="https://twitter.com" target="blank"><img src="img/icons/003-twitter.svg" alt="Icone Twitter"></a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <h3 class="footer-titles">Contatos</h3>
                            <p class="footer-contatos">
                                - Telefone: (71) 99999 - 9999<br>
                                - E-mail: contato@sabordecarne.com.br
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="footer-copy">Sabor de Carne 2020 @ Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
