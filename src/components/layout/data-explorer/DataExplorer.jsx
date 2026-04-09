import { useMemo, useState } from 'react';
import clsx from 'clsx';
import styles from './DataExplorer.module.css';
import { Filter, List } from './components';
import { useDataExplorer } from './hooks';

export const DataExplorer = ({ data, title }) => {
  const {
    category,
    setCategory,
    sortKey,
    setSortKey,
    sortDir,
    setSortDir,
    categories,
    filteredData,
  } = useDataExplorer(data);

  return (
    <section className={'container mx-auto px-8 py-16 md:px-0 md:py-13'}>
      <header className={'grid grid-cols-1 md:grid-cols-6 gap-4'}>
        <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
          <div className={'text-center'}>
            <h1 className={clsx(styles.title, styles.shiningText)}>{title}</h1>

            <div className={styles.dividerContainer}>
              <div className={styles.dividerLine}></div>
            </div>
          </div>

          <Filter
            categories={categories}
            category={category}
            count={filteredData.length}
            setCategory={setCategory}
            setSortDir={setSortDir}
            setSortKey={setSortKey}
            sortDir={sortDir}
            sortKey={sortKey}
          />

          <List data={filteredData} />
        </div>
      </header>
    </section>
  );
};
