import { useParams } from 'react-router-dom';
import { DataExplorer, Header, ItemDetail } from '@components';
import {
  MAPPED_ACCESSORIES,
  MAPPED_CONSUMABLES,
  MAPPED_COSMETICS,
  MAPPED_HEIRLOOMS,
  MAPPED_MATERIALS,
} from '@data';
import { PATHS } from '@router';
import styles from './ItemsPage.module.css';

export const ItemsPage = () => {
  const { itemId } = useParams();

  const combinedData = [
    ...MAPPED_MATERIALS,
    ...MAPPED_CONSUMABLES,
    ...MAPPED_ACCESSORIES,
    ...MAPPED_HEIRLOOMS,
    ...MAPPED_COSMETICS,
  ];
  return (
    <>
      {itemId ? (
        <ItemDetail itemId={itemId} />
      ) : (
        <>
          <Header title={'Items'} />
          <DataExplorer
            data={combinedData}
            sortOptions={['name', 'rarity', 'type', 'tradeable']}
            basePath={PATHS.ITEMS}
          />
        </>
      )}
    </>
  );
};
