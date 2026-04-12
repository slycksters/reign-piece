import clsx from 'clsx';
import { CiImageOn } from 'react-icons/ci';
import styles from './List.module.css';
import { Button } from '../../../../ui';

export const List = (props) => {
  const { data } = props;

  return (
    <main
      className={clsx(
        styles.list,
        'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4',
      )}
    >
      {data.map((item) => (
        <Button
          key={item.id}
          borderColor={item.rarity?.color ?? 'var(--border-strong)'}
          className="!p-0"
          variant={'styled_borders'}
        >
          <article className="flex flex-col h-full">
            <figure className={styles.imageContainer}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className={'w-full h-full object-cover'}
                  loading={'lazy'}
                  decoding={'async'}
                />
              ) : (
                <CiImageOn className={`text-[var(--text-muted)] text-3xl`} />
              )}

              {/* Overlay Container spanning top-left to top-right */}
              <div
                className={
                  'absolute top-1 left-1 right-1 flex justify-between gap-1 items-start pointer-events-none'
                }
              >
                {/* Availability - Top Left */}
                {item.availability && (
                  <span
                    className={clsx(
                      styles.infoText,
                      'px-2 py-1 rounded text-white pointer-events-auto shrink min-w-0 truncate',
                    )}
                    style={{ background: item.availability.color }}
                  >
                    {item.availability.name}
                  </span>
                )}

                {/* Rarity - Top Right */}
                {item.rarity && (
                  <span
                    className={clsx(
                      styles.infoText,
                      'px-2 py-1 rounded text-white pointer-events-auto ml-auto shrink-0 break-all whitespace-normal text-right',
                    )}
                    style={{ background: item.rarity.color, maxWidth: '65%' }}
                  >
                    {item.rarity.name}
                  </span>
                )}
              </div>
            </figure>

            <section className={styles.infoContainer}>
              <span className={styles.itemName}>{item.name}</span>

              <div className={'grid grid-cols-2 gap-3 mt-2'}>
                {/* Type */}
                <div className={'flex flex-col'}>
                  <span className={styles.infoLabel}>Type</span>
                  <span className={clsx(styles.infoText, 'py-1 break-all')}>
                    {item.type?.name}
                  </span>
                </div>

                {/* Tier */}
                {item.tier && (
                  <div className={'flex flex-col'}>
                    <span className={styles.infoLabel}>Tier</span>
                    <span
                      className={clsx(styles.infoText, 'py-1 break-all')}
                      style={{ color: item.tier.color }}
                    >
                      {item.tier.name}
                    </span>
                  </div>
                )}

                {/* Tradeable */}
                {item.tradeable !== undefined && (
                  <div className={'flex flex-col'}>
                    <span className={styles.infoLabel}>Tradeable</span>
                    <span className={clsx(styles.infoText, 'py-1 break-all')}>
                      {item.tradeable ? 'Yes' : 'No'}
                    </span>
                  </div>
                )}

                {/* Stack Limit */}
                {item.stackLimit !== undefined && (
                  <div className={'flex flex-col'}>
                    <span className={styles.infoLabel}>Stack Limit</span>
                    <span className={clsx(styles.infoText, 'py-1 break-all')}>
                      {item.stackLimit}
                    </span>
                  </div>
                )}

                {/* Part */}
                {item.part !== undefined && (
                  <div className={'flex flex-col'}>
                    <span className={styles.infoLabel}>Part</span>
                    <span className={clsx(styles.infoText, 'py-1 break-all')}>
                      {item.part.name}
                    </span>
                  </div>
                )}
              </div>
            </section>
          </article>
        </Button>
      ))}
    </main>
  );
};
