import { DataExplorer, Header } from '@components';
import { MAPPED_CONSUMABLES, MAPPED_MATERIALS } from '@data';
import styles from './ItemsPage.module.css';

export const ItemsPage = () => {
  const combinedData = [...MAPPED_MATERIALS, ...MAPPED_CONSUMABLES];
  return (
    <>
      <Header title={'Items'} />
      <DataExplorer
        data={combinedData}
        sortOptions={['name', 'rarity', 'type']}
      />
    </>
  );
};
