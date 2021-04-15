import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageLayoutWithSEO } from '@components';

const HomePage: React.FunctionComponent<any> = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <PageLayoutWithSEO
        title={t('title')}
        meta={{
          description: t('description'),
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        <div>
          <Link href='/' locale={router.locale === 'en' ? 'fr' : 'en'}>
            <button>{t('change-locale')}</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
