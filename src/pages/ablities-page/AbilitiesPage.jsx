import { useParams } from 'react-router-dom';
import { DataExplorer, Header, ItemDetail } from '@components';
import { MAPPED_DEVIL_FRUITS, MAPPED_SPECS, MAPPED_WEAPONS } from '@data';
import { PATHS } from '@router';
import styles from './AbilitiesPage.module.css';

export const AbilitiesPage = () => {
  const { itemId } = useParams();

  const combinedData = [
    ...MAPPED_DEVIL_FRUITS,
    ...MAPPED_SPECS,
    ...MAPPED_WEAPONS,
  ];

  return (
    <>
      {itemId ? (
        <ItemDetail itemId={itemId} />
      ) : (
        <>
          <Header title={'Abilities'} />

          <DataExplorer
            data={combinedData}
            sortOptions={['name', 'rarity', 'tier', 'type']}
            basePath={PATHS.ABILITIES}
          />
        </>
      )}
    </>
  );
};
