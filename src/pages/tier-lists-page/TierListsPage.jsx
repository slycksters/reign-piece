import { useState } from 'react';
import clsx from 'clsx';

import { Header } from '@components';
import {
  MAPPED_DEVIL_FRUITS,
  MAPPED_SPECS,
  MAPPED_TRAITS,
  MAPPED_WEAPONS,
} from '@data';
import { TierList } from './components';
import styles from './TierListsPage.module.css';

const ABILITIES = [...MAPPED_DEVIL_FRUITS, ...MAPPED_SPECS, ...MAPPED_WEAPONS];

export const TierListsPage = () => {
  const tierLists = {
    abilities: {
      name: 'Abilities',
      data: ABILITIES,
    },
    traits: {
      name: 'Traits',
      data: MAPPED_TRAITS,
    },
  };

  const [selectedKey, setSelectedKey] = useState('abilities');

  const selected = tierLists[selectedKey];

  return (
    <>
      <Header title={'Tier Lists'} />

      {/* CONTENT */}
      <section className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-1 md:col-span-4 md:col-start-2">
            {/* BUTTON GROUP */}
            <div className={styles.buttonGroup}>
              {Object.entries(tierLists).map(([key, list]) => (
                <button
                  key={key}
                  onClick={() => setSelectedKey(key)}
                  className={clsx(
                    styles.button,
                    selectedKey === key && styles.activeButton,
                  )}
                >
                  {list.name}
                </button>
              ))}
            </div>

            <TierList data={selected.data} />
          </div>
        </div>
      </section>
    </>
  );
};
