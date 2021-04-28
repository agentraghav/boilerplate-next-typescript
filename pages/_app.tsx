import '../styles/styles.css';
import React from 'react';
import * as Sentry from '@sentry/react';
import CONFIG from '@config';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

if (CONFIG.sentryDSN) {
  Sentry.init({ dsn: CONFIG.sentryDSN });
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Sentry.ErrorBoundary>
      <Component {...pageProps} />
    </Sentry.ErrorBoundary>
  );
};

export default appWithTranslation(App);
