import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import styles from './CollapsibleSection.module.css';

export const CollapsibleSection = ({
  title,
  description,
  data,
  renderItem,
  gridCols = 'grid-cols-1 md:grid-cols-2',
  animationDuration = 0.35,
}) => {
  const [openList, setOpenList] = useState(false);

  return (
    <article className={styles.section}>
      <header className={styles.header}>
        <h3 className={styles.headerTitle}>{title}</h3>
        <p className={styles.headerDescription}>{description}</p>
      </header>

      <motion.div
        className={clsx('grid', gridCols, styles.list)}
        initial={false}
        animate={{
          height: openList ? 'auto' : 0,
          opacity: openList ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeInOut',
        }}
        style={{ overflow: 'hidden' }}
      >
        {/* Pass the item data and the styles object to the render function */}
        {data.map((item) => renderItem(item, styles))}
      </motion.div>

      <button
        className={styles.button}
        onClick={() => setOpenList((v) => !v)}
        type="button"
      >
        <BsChevronDoubleDown
          className={clsx(styles.normalArrow, {
            [styles.rotated]: openList,
          })}
        />
      </button>
    </article>
  );
};