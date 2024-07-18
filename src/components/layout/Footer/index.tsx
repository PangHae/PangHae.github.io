import { FC } from 'react';

import github from '@/assets/images/github.png';
import linkedin from '@/assets/images/linkedin.png';

import styles from './footer.module.scss';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKED_IN_URL = import.meta.env.VITE_LINKED_IN_URL;

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <menu className={styles.logos}>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href={LINKED_IN_URL} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </menu>
      <strong>© 2024. Lee Kwang Hae All rights reserved.</strong>
    </footer>
  );
};

export default Footer;
