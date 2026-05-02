import { POWER_LEVEL_LABEL } from '@enums';
import styles from './Performance.module.css';

/* -------------------------
   PERFORMANCE BARS (Level-based)
-------------------------- */

const getSegments = (level) =>
  Array.from({ length: 5 }, (_, i) => i < level);

const getColor = (level) => `var(--power-${level})`;

const PerformanceRow = ({ label, level }) => {
  return (
    <div className={styles.performanceGroup}>
      <div className={styles.labelGroup}>
        <span className={styles.label}>{label}</span>

        <span
          className={styles.value}
          style={{ color: getColor(level) }}
        >
          {POWER_LEVEL_LABEL[level]}
        </span>
      </div>

      <div className={styles.segmentBar} data-level={level}>
        {getSegments(level).map((filled, index) => (
          <div
            key={index}
            className={styles.segment}
            style={
              filled
                ? {
                    backgroundColor: getColor(level),
                    color: getColor(level),
                  }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
};

/* -------------------------
   SCALING (TYPE BADGE)
-------------------------- */

const SCALING_TYPES = ['MELEE', 'POWER', 'SWORD'];

const ScalingBadgeGroup = ({ type }) => {
  return (
    <div className={styles.scalingGroup}>
      {SCALING_TYPES.map((t) => {
        const isActive = t === type.toUpperCase();

        return (
          <span
            key={t}
            className={`${styles.scalingBadge} ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            {t}
          </span>
        );
      })}
    </div>
  );
};

/* -------------------------
   MAIN PERFORMANCE
-------------------------- */

export const Performance = (props) => {
  const {
    scaling,
    difficulty,
    damageLevel,
    aoeSize,
  } = props;

  return (
    <div className={styles.performance}>
      <span className={styles.performanceTitle}>Performance</span>

      <div className={styles.performanceDetails}>
        {/* Scaling */}
        <div className={styles.performanceGroup}>
          <div className={styles.labelGroup}>
            <span className={styles.label}>Scaling</span>
            <ScalingBadgeGroup type={scaling} />
          </div>
        </div>

        {/* LEVEL METRICS */}
        <PerformanceRow label="Difficulty" level={difficulty} />
        <PerformanceRow label="Burst Damage" level={damageLevel} />
        <PerformanceRow label="AoE Size" level={aoeSize} />
      </div>
    </div>
  );
};