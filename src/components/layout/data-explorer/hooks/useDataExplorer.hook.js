import { useMemo, useState } from 'react';

export const useDataExplorer = (data) => {
  const [category, setCategory] = useState('all');
  const [sortKey, setSortKey] = useState();
  const [sortDir, setSortDir] = useState('asc');

  // CATEGORY LIST
  const categories = useMemo(() => {
    const unique = new Map();

    data.forEach((item) => {
      if (item.type?.id) {
        unique.set(item.type.id, item.type);
      }
    });

    return ['all', ...Array.from(unique.values())];
  }, [data]);

  // FILTER + SORT
  const filteredData = useMemo(() => {
    // FILTER FIRST
    let result = category === 'all' 
      ? [...data] 
      : data.filter((item) => item.type?.name === category);

    // SORT
    result.sort((a, b) => {
      let aValue;
      let bValue;

      switch (sortKey) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;

        case 'rarity':
          aValue = a.rarity.id;
          bValue = b.rarity.id;
          break;

        case 'tier':
          aValue = a.tier.id;
          bValue = b.tier.id;
          break;

        case 'type':
          aValue = a.type.name;
          bValue = b.type.name;
          break;

        case 'tradeable':
          aValue = a.tradeable;
          bValue = b.tradeable;
          break;

        default:
          return 0;
      }

      if (typeof aValue === 'string') {
        return sortDir === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (sortKey === null) return;
      return sortDir === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return result;
  }, [data, category, sortKey, sortDir]);

  return {
    category,
    setCategory,
    sortKey,
    setSortKey,
    sortDir,
    setSortDir,
    categories,
    filteredData,
  };
};
