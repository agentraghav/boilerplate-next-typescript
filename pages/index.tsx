import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageLayoutWithSEO, AppComponent, Header } from '@components';
// import styles from '../styles/home.module.css';
const HomePage: React.FunctionComponent<any> = () => {
const { t } = useTranslation('common');

  return (
    <>
       <div className='next-logo'></div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
