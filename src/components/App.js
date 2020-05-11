import React from 'react';
import Routes from './routes';
import Colors from '../styles/settings/colors';
import Gaps from '../styles/settings/gaps';
import Typography from '../styles/settings/typograph';
import Reset from '../styles/generics/reset';
import Normalize from '../styles/generics/normalize';
import Elements from '../styles/base/elements';

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Colors
        primary="#EB8242"
        secondary="#B03C47"
        support1="#FFF"
        support2="#F5F6FA"
        support3="#2E2D2D"
      />
      <Gaps gap="16px" gapSM="32px" gapMD="64px" gapLG="128px" />
      <Typography
        fontPrimary="'Playfair Display', serif"
        fontSecondary="'Lato', sans-serif"
      />
      <Normalize />
      <Reset />
      <Elements />

      <Routes />

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin
      />

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      />

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      />

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
}
