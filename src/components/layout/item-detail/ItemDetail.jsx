import { ALL_MAPPED_ITEMS } from '@data';
import styles from './ItemDetail.module.css';
import {
  Analysis,
  InfoHeader,
  Overview,
  Performance,
  Stats,
  Usage,
} from './components';

export const ItemDetail = ({ itemId }) => {
  const item = ALL_MAPPED_ITEMS.find((i) => i.id === itemId);

  if (!item) {
    return (
      <p className={styles.notFound}>
        The requested item could not be found. It might be a work in progress or
        an invalid link.
      </p>
    );
  }

  return (
    <section className={'container mx-auto px-8'}>
      <div className={'grid grid-cols-1 lg:grid-cols-6 gap-4'}>
        <div className={'col-span-1 lg:col-span-4 lg:col-start-2'}>
          <div className={styles.content}>
            <InfoHeader {...item} />

            <div className={'grid grid-cols-1 lg:grid-cols-2'}>
              <Overview {...item} />
              {item.performance && <Performance {...item.performance} />}
              {item.usages && <Usage usages={item.usages} />}
              {item.stats && <Stats stats={item.stats} />}

              <div className={'col-span-1 lg:col-span-2'}>
                <Analysis {...item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
