import React from 'react';
import clsx from 'clsx';
import { Button } from '@components';
import styles from './Navigation.module.css';

const NAV_ITEMS = [
  {
    id: 'abilities',
    title: 'Abilities',
    borderColor: 'var(--color-danger-red)',
    tags: ['Weapons', 'Specs', 'Devil Fruits'],
  },
  {
    id: 'stat-buffs',
    title: 'Stat Buffs',
    borderColor: 'var(--color-solar-gold)',
    tags: ['Ranks', 'Race', 'Traits', 'Titles', 'Vows', 'Heirloom'],
  },
  {
    id: 'items',
    title: 'Items',
    borderColor: 'var(--color-success-green)',
    tags: ['Materials', 'Consumables'],
  },
  {
    id: 'tier-lists',
    title: 'Tier Lists',
    borderColor: 'var(--color-info-blue)',
    tags: ['Weapons', 'Specs', 'Devil Fruits'],
  },
  {
    id: 'recommended-builds',
    title: 'Recommended Builds',
    borderColor: 'var(--color-info-blue)',
    tags: ['Damage', 'Fame', 'Droprate', 'Money & Exp'],
  },
  {
    id: 'game-mechanics',
    title: 'Game Mechanics',
    borderColor: 'var(--color-info-blue)',
    tags: ['NPCs', 'Dungeons & Raids', 'Islands', 'Mining'],
  },
];

export const Navigation = () => {
  return (
    <section className={clsx(styles.navigation, 'mt-8')}>
      <div className={'text-center'}>
        <div className={'flex justify-center mt-1.5'}>
          <Button
            className={clsx(styles.guideButton, 'mr-4')}
            text={'beningging Guide'}
            variant={'default'}
          />
          <Button
            className={clsx(styles.playButton, 'mr-4')}
            text={'Play'}
            variant={'default'}
          />
          <Button
            className={styles.updateLogsButton}
            text={'Update Logs'}
            variant={'default'}
          />
        </div>

        <div className={'mt-4'}>
          <div
            className={clsx(
              styles.navigationList,
              'grid grid-cols-2 md:grid-cols-3 gap-4',
            )}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className={clsx(styles.listItem, 'w-full')}>
                <Button
                  className={clsx(styles.listItemButton, 'h-full w-full')}
                  borderColor={item.borderColor}
                  Content={() => (
                    <div className={'flex flex-col items-center'}>
                      <span className={styles.buttonTitle}>{item.title}</span>
                      <div
                        className={
                          'flex flex-wrap items-center justify-center gap-1.5 text-[var(--color-muted-ash)] mt-1'
                        }
                      >
                        {item.tags.map((tag, index) => (
                          <React.Fragment key={tag}>
                            <span className={styles.tagName}>{tag}</span>
                            {index < item.tags.length - 1 && (
                              <span aria-hidden={'true'} className={'mb-1'}>
                                &bull;
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
