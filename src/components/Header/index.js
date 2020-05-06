import React from 'react';
import { Link } from 'react-router-dom';

import './styles';

export default function Header() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <header className="header header-home fadeInDown" data-anime="200">
      <div className="row">
        <div className="col-4">
          <Link className="nav-brand" to="/">
            <h1>SC</h1>
          </Link>
        </div>
        <nav className="col-8 header-nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Churrascaria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
