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
            className={`text-xs px-2 py-1 border ${
              category === 'all'
                ? 'border-white'
                : 'border-[var(--border-default)]'
            }`}
          >
            All
          </button>

          {categories
            .filter((c) => c !== 'all')
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.name)}
                className={`text-xs px-2 py-1 border ${
                  category === cat.name
                    ? 'border-white'
                    : 'border-[var(--border-default)]'
                }`}
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
              onClick={() => setSortKey((prevKey) => prevKey === key ? null : key)}
              className={`text-xs px-2 py-1 border ${
                sortKey === key
                  ? 'border-white'
                  : 'border-[var(--border-default)]'
              }`}
            >
              {key}
            </button>
          ))}

          {/* ASC / DESC toggle */}
          <button
            onClick={() =>
              setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
            className="text-xs px-2 py-1 border border-[var(--border-default)]"
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
