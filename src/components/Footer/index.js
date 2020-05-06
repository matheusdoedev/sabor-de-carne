import React from 'react';
import {  } from 'react-router-dom';

import './styles';

export default function Footer() {
    return(
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
    );
}

