import clsx from 'clsx';
import styles from './Filter.module.css';

export const Filter = (props) => {
  const {
    categories,
    category,
    setCategory,
    sortKey,
    setSortKey,
    sortDir,
    setSortDir,
    count,
  } = props;

  return (
    <nav aria-label="Filters" className="flex flex-col gap-3 mt-4 mb-2">
      {/* ROW 1: CATEGORY */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
        <span className={styles.infoLabel}>Categories</span>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setCategory('all')}
            className={clsx(
              styles.filterButton,
              category === 'all' ? styles.activeFilterButton : '',
            )}
          >
            All
          </button>

          {categories
            .filter((c) => c !== 'all')
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.name)}
                className={clsx(
                  styles.filterButton,
                  category === cat.name ? styles.activeFilterButton : '',
                )}
              >
                {cat.name}
              </button>
            ))}
        </div>
      </div>

      {/* ROW 2: SORT */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
        <span className={styles.infoLabel}>Sort</span>

        <div className="flex items-center gap-2 flex-wrap">
          {['name', 'rarity', 'tier', 'type'].map((key) => (
            <button
              key={key}
              onClick={() =>
                setSortKey((prevKey) => (prevKey === key ? null : key))
              }
              className={clsx(
                styles.filterButton,
                sortKey === key ? styles.activeFilterButton : '',
              )}
            >
              {key}
            </button>
          ))}

          {/* ASC / DESC toggle */}
          <button
            onClick={() =>
              setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
            className={styles.filterButton}
          >
            {sortDir === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* ROW 3: RESULTS (RIGHT ALIGNED) */}
      <div className="flex justify-end">
        <span className={styles.infoLabel}>Results: {count}</span>
      </div>
    </nav>
  );
};
