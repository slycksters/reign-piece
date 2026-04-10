import { DataExplorer } from '@components';
import { MAPPED_DEVIL_FRUITS, MAPPED_SPECS, MAPPED_WEAPONS } from '@data';
import styles from './AbilitiesPage.module.css';

export const AbilitiesPage = () => {
  const combinedData = [
    ...MAPPED_DEVIL_FRUITS,
    ...MAPPED_SPECS,
    ...MAPPED_WEAPONS,
  ];

  return (
    <div>
      <DataExplorer data={combinedData} title={'Abilities'} />
    </div>
  );
};
