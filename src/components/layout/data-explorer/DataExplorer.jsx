import { Filter, List } from './components';
import styles from './DataExplorer.module.css';
import { useDataExplorer } from './hooks';

export const DataExplorer = ({ data, sortOptions = ['name'] }) => {
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
    <section className={'container mx-auto px-8'}>
      <div className={'grid grid-cols-1 md:grid-cols-6 gap-4'}>
        <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
          <Filter
            categories={categories}
            category={category}
            count={filteredData.length}
            setCategory={setCategory}
            setSortDir={setSortDir}
            setSortKey={setSortKey}
            sortDir={sortDir}
            sortKey={sortKey}
            sortOptions={sortOptions}
          />

          <List data={filteredData} />
        </div>
      </div>
    </section>
  );
};
