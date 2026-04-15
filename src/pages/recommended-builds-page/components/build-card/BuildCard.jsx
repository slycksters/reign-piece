import styles from './BuildCard.module.css';

export const BuildCard = ({ build }) => {
  const { name, note, ...stats } = build;

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <h4 className={styles.cardTitle}>{name}</h4>
        {note && <p className={styles.cardNote}>{note}</p>}
      </header>
      <div className={styles.statsGrid}>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className={styles.statItem}>
            <span className={styles.statLabel}>{key}</span>
            <span className={styles.statValue}>{value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};