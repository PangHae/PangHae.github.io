import HashAnchor from '@/components/common/HashAnchor';

import styles from './home.module.scss';

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <HashAnchor id="about" />
      <section>
        <h2>About me</h2>
      </section>
      <HashAnchor id="career" />
      <section>
        <h2>Career</h2>
      </section>
      <HashAnchor id="skills" />
      <section>
        <h2>Skills</h2>
      </section>
      <HashAnchor id="projects" />
      <section>
        <h2>Projects</h2>
      </section>
    </main>
  );
};

export default Home;