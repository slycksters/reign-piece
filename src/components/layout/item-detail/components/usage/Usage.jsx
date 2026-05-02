import styles from './Usage.module.css';

export const Usage = (props) => {
  const { usages } = props;

  return (
    <section className={styles.usage}>
      <span className={styles.usageTitle}>Usage</span>

      <ul className={styles.usageList}>
        {usages.map((usage) => (
          <li className={styles.usageListItem} key={usage.description}>
            {usage}
          </li>
        ))}
      </ul>
    </section>
  );
};
