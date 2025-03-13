import { FC } from 'react';

import Calendar from '@/assets/images/calendar.png';
import Education from '@/assets/images/education.png';
import Email from '@/assets/images/email.png';
import Location from '@/assets/images/location.png';
import MyImage from '@/assets/images/me.jpg';
import Me from '@/assets/images/me.png';
import Phone from '@/assets/images/phone.png';

import baseStyles from '../home.module.scss';
import styles from './about.module.scss';

const env = import.meta.env;

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
        <div className={styles.information}>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Me} alt="me" />
            <div className={styles.detail}>
              <p className={styles.detailName}>이름</p>
              이광해
            </div>
          </div>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Calendar} alt="calendar" />
            <div className={styles.detail}>
              <p className={styles.detailName}>생년월일</p>
              {env.VITE_BIRTHDAY}
            </div>
          </div>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Location} alt="location" />
            <div className={styles.detail}>
              <p className={styles.detailName}>주소지</p>
              {env.VITE_ADDRESS}
            </div>
          </div>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Phone} alt="phone" />
            <div className={styles.detail}>
              <p className={styles.detailName}>연락처</p>
              {env.VITE_PHONE_NUMBER}
            </div>
          </div>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Email} alt="email" />
            <div className={styles.detail}>
              <p className={styles.detailName}>이메일</p>
              {env.VITE_EMAIL}
            </div>
          </div>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={Education} alt="education" />
            <div className={styles.detail}>
              <p className={styles.detailName}>학력</p>
              {env.VITE_EDUCATION}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
