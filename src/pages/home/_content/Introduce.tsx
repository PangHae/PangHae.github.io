import { FC } from 'react';

import styles from './introduce.module.scss';

const Introduce: FC = () => {
  return (
    <section className={styles.introduceContainer}>
      <div className={styles.greet}>
        <p className={styles.description}>안녕하세요,</p>
        <strong className={styles.accent}>
          도전을 좋아하는 Frontend 개발자 <b className={styles.bold}>이광해</b>
          입니다.
        </strong>
      </div>
      <p className={styles.description}>
        멈춰있지 않고 꾸준히 학습하고 새로운 기술을 시도하고 도전합니다.
      </p>
    </section>
  );
};

export default Introduce;
