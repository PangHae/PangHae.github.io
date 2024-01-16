import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { HEADER_MENU } from '@/common/constants/menus';

import styles from './header.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate('/', { replace: true });
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title} onClick={handleClickTitle}>
          Panghae Developer
        </div>
        <menu className={styles.menu}>
          {HEADER_MENU.map(({ value, label }) => (
            <li key={value}>
              <a href={`#${value}`}>{label}</a>
            </li>
          ))}
        </menu>
      </div>
    </header>
  );
};

export default Header;
