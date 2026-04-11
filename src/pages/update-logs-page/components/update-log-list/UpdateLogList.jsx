import React, { useState } from 'react';
import clsx from 'clsx';
import { convertUtcToLocalDate, pluralizeText } from '@utils';
import styles from './UpdateLogList.module.css';
import { UPDATE_LOGS } from '../../constants';

export const UpdateLogList = () => {
  const [openUpdateId, setOpenUpdateId] = useState(UPDATE_LOGS.length);

  return (
    <section className={'container mx-auto px-8'}>
      <div className={'grid grid-cols-1 md:grid-cols-6'}>
        <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
          {/* Sorted by date -> latest to earliest */}
          {UPDATE_LOGS.sort((a, b) => new Date(b.date) - new Date(a.date)).map(
            (update) => (
              <React.Fragment key={update.name}>
                <button
                  className={clsx(
                    styles.accordionButton,
                    openUpdateId === update.id
                      ? styles.selectedAccordionButton
                      : '',
                    'mt-4',
                  )}
                  onClick={() =>
                    setOpenUpdateId((prevId) =>
                      update.id === prevId ? null : update.id,
                    )
                  }
                >
                  <span>
                    <b>{update.name}</b>
                  </span>
                  <span className={styles.updateDate}>
                    {convertUtcToLocalDate(update.date)}
                  </span>
                </button>

                {openUpdateId === update.id && (
                  <article className={clsx(styles.content, 'mt-4')}>
                    {/* Codes */}
                    {update.codes && (
                      <>
                        <section className={styles.contentItem}>
                          <h6>Codes:</h6>
                          <ul className={styles.contentList}>
                            {update.codes.map((code) => (
                              <li className={styles.contentListItem}>{code}</li>
                            ))}
                          </ul>
                        </section>
                        <div className={styles.circleDivider}></div>
                      </>
                    )}

                    {/* Contents */}
                    {update.content?.summary && (
                      <>
                        <div className={styles.contentItem}>
                          <h6>Contents:</h6>
                          <ul className={styles.contentList}>
                            {/* Content Summary */}
                            {update.content.summary &&
                              update.content.summary.map((change) => (
                                <li className={styles.contentListItem}>
                                  {change}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className={styles.circleDivider}></div>
                      </>
                    )}

                    {/* QOL */}
                    {update.content?.qol && (
                      <>
                        <div className={styles.contentItem}>
                          <h6>Quality of Life:</h6>
                          <ul className={styles.contentList}>
                            {/* QOL */}
                            {update.content.qol &&
                              update.content.qol.map((change) => (
                                <li className={styles.contentListItem}>
                                  {change}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className={styles.circleDivider}></div>
                      </>
                    )}

                    {/* Balancing */}
                    {update.content?.balancing && (
                      <>
                        <div className={styles.contentItem}>
                          <h6>Balancing:</h6>
                          <ul className={styles.contentList}>
                            {/* Balancing */}
                            {update.content.balancing &&
                              update.content.balancing.map((change) => (
                                <li className={styles.contentListItem}>
                                  {change}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className={styles.circleDivider}></div>
                      </>
                    )}

                    {/* Bug Fix */}
                    {update.content?.bugfixes && (
                      <>
                        <div className={styles.contentItem}>
                          <h6>Bug Fixes:</h6>
                          <ul className={styles.contentList}>
                            {/* Bug Fix */}
                            {update.content.bugfixes &&
                              update.content.bugfixes.map((change) => (
                                <li className={styles.contentListItem}>
                                  {change}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className={styles.circleDivider}></div>
                      </>
                    )}
                  </article>
                )}
              </React.Fragment>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
