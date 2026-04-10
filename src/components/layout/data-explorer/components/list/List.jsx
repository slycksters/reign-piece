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
          borderColor={item.rarity.color}
          className="!p-0"
          variant={'styled_borders'}
          Content={() => (
            <article className="flex flex-col">
              <figure className={styles.imageContainer}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className={'w-full h-full object-cover'}
                  />
                ) : (
                  <CiImageOn className={`text-[var(--text-muted)] text-3xl`} />
                )}

                {/* Rarity tag overlay */}
                <span
                  className={clsx(
                    styles.infoText,
                    'absolute top-1 right-1 px-2 py-1 rounded break-all whitespace-normal',
                  )}
                  style={{
                    backgroundColor: item.rarity.color,
                    maxWidth: 'calc(100% - 4px)',
                  }}
                >
                  {item.rarity.name}
                </span>
              </figure>

              <section className={styles.infoContainer}>
                {/* Item Name */}
                <label className={styles.itemName}>{item.name}</label>

                {/* Properties grid */}
                <div className={'grid grid-cols-2 gap-3 mt-2'}>
                  {/* Type */}
                  <div className={'flex flex-col'}>
                    <label className={styles.infoLabel}>Type</label>
                    <span
                      className={clsx(styles.infoText, 'py-1 break-all')}
                      style={{ backgroundColor: item.type.color }}
                    >
                      {item.type.name}
                    </span>
                  </div>

                  {/* Tier */}
                  <div className={'flex flex-col'}>
                    <label className={styles.infoLabel}>Tier</label>
                    <span
                      className={clsx(styles.infoText, 'py-1 break-all')}
                      style={{
                        color: item.tier.color,
                      }}
                    >
                      {item.tier.name}
                    </span>
                  </div>

                  {/* Add more properties if needed */}
                </div>
              </section>
            </article>
          )}
        />
      ))}
    </main>
  );
};
