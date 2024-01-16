import { FC } from 'react';
import { Outlet } from 'react-router';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import styles from './base.module.scss';

const BaseLayout: FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
