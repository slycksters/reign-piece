import clsx from 'clsx';
import styles from './GameMechanicsPage.module.css';

export const GameMechanicsPage = () => {
  return (
    <div className={'container mx-auto px-8 py-16 md:px-0 md:py-13'}>
      <div className={'grid grid-cols-1 md:grid-cols-6 gap-4'}>
        <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
          <header className={'text-center'}>
            <h1 className={clsx(styles.title, styles.shiningText)}>Game Mechanics</h1>

            <div className={styles.dividerContainer}>
              <div className={styles.dividerLine}></div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
