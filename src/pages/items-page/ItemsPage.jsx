import { DataExplorer, Header } from '@components';
import {
  MAPPED_ACCESSORIES,
  MAPPED_CONSUMABLES,
  MAPPED_COSMETICS,
  MAPPED_HEIRLOOMS,
  MAPPED_MATERIALS,
} from '@data';
import styles from './ItemsPage.module.css';

export const ItemsPage = () => {
  const combinedData = [
    ...MAPPED_MATERIALS,
    ...MAPPED_CONSUMABLES,
    ...MAPPED_ACCESSORIES,
    ...MAPPED_HEIRLOOMS,
    ...MAPPED_COSMETICS,
  ];
  return (
    <>
      <Header title={'Items'} />
      <DataExplorer
        data={combinedData}
        sortOptions={['name', 'rarity', 'type', 'tradeable']}
      />
    </>
  );
};
