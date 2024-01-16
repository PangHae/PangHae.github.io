import { FC } from 'react';

import github from '@/assets/images/github.png';

import styles from './footer.module.scss';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <menu className={styles.logos}>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </li>
      </menu>
      <strong>© 2024. Lee Kwang Hae All rights reserved.</strong>
    </footer>
  );
};

export default Footer;
