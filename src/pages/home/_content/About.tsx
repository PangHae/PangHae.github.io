import { FC } from 'react';

import MyImage from '@/assets/images/me.jpg';

import baseStyles from '../home.module.scss';
import styles from './about.module.scss';

const About: FC = () => {
  return (
    <section className={baseStyles.contentContainer}>
      <h2 className={baseStyles.title}>About me</h2>
      <article className={styles.aboutMe}>
        <img
          className={styles.profileImage}
          src={MyImage}
          alt="profile image"
        />
        <div className={styles.information}>hi</div>
      </article>
    </section>
  );
};

export default About;
