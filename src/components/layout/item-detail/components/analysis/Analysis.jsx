import styles from './Analysis.module.css';

export const Analysis = (props) => {
  const { description } = props;

  return (
    <div className={styles.analysis}>
      <span className={styles.analysisTitle}>Analysis</span>

      <div className={styles.analysisDetails}>
        {Array.isArray(description) ? (
          description.map((item) => <p key={item}>{item}</p>)
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};
