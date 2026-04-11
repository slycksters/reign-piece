import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Button } from '@components';
import { PATHS } from '@router';
import styles from './Navigation.module.css';

const NAV_ITEMS = [
  {
    id: 'abilities',
    title: 'Abilities',
    borderColor: 'var(--color-danger-red)',
    tags: ['Weapons', 'Specs', 'Devil Fruits'],
    path: `ABILITIES`,
  },
  {
    id: 'stat-buffs',
    title: 'Stat Buffs',
    borderColor: 'var(--color-solar-gold)',
    tags: ['Ranks', 'Race', 'Traits', 'Titles', 'Vows', 'Heirloom'],
    path: `STAT_BUFFS`,
  },
  {
    id: 'items',
    title: 'Items',
    borderColor: 'var(--color-success-green)',
    tags: ['Materials', 'Consumables'],
    path: `ITEMS`,
  },
  {
    id: 'tier-lists',
    title: 'Tier Lists',
    borderColor: 'var(--color-info-blue)',
    tags: ['Weapons', 'Specs', 'Devil Fruits'],
    path: `TIER_LISTS`,
  },
  {
    id: 'recommended-builds',
    title: 'Recommended Builds',
    borderColor: 'var(--color-info-blue)',
    tags: ['Damage', 'Fame', 'Droprate', 'Money & Exp'],
    path: `RECOMMENDED_BUILDS`,
  },
  {
    id: 'game-mechanics',
    title: 'Game Mechanics',
    borderColor: 'var(--color-info-blue)',
    tags: ['NPCs', 'Dungeons & Raids', 'Islands', 'Mining'],
    path: `GAME_MECHANICS`,
  },
];

export const Navigation = () => {
  return (
    <section className={clsx(styles.navigation, 'mt-8')}>
      <div className={'text-center'}>
        <div className={'flex justify-center mt-1.5'}>
          <div className={'flex justify-center items-stretch gap-4'}>
            <NavLink to={PATHS['GUIDES']} className={'flex'}>
              <Button
                className={clsx(styles.guideButton, 'h-full w-full')}
                variant={'default'}
              >
                Beningging Guide
              </Button>
            </NavLink>

            <Button
              className={clsx(styles.playButton, 'h-full')}
              variant={'default'}
            >
              Play
            </Button>

            <NavLink to={PATHS['UPDATE_LOGS']} className={'flex'}>
              <Button
                className={clsx(styles.updateLogsButton, 'h-full w-full')}
                variant={'default'}
              >
                Update Logs
              </Button>
            </NavLink>
          </div>
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
                <NavLink to={PATHS[item.path]}>
                  <Button
                    className={clsx(styles.listItemButton, 'h-full w-full')}
                    borderColor={item.borderColor}
                  >
                    <div className={'flex flex-col items-center'}>
                      <span className={styles.buttonTitle}>{item.title}</span>
                      <div
                        className={
                          'flex flex-wrap items-center justify-center gap-1.5 text-[var(--color-muted-ash)]'
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
                  </Button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
