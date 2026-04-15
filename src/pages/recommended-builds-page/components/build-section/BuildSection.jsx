import { BuildCard } from '../build-card/BuildCard';
import styles from './BuildSection.module.css';

export const BuildsSection = ({ title, note, builds }) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h3 className={styles.headerTitle}>{title}</h3>
        <small className={styles.note}>{note}</small>
      </header>
      <div className={styles.grid}>
        {builds.map((build) => (
          <BuildCard key={build.name} build={build} />
        ))}
      </div>
    </section>
  );
};