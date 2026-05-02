import { CiImageOn } from 'react-icons/ci';
import styles from './InfoHeader.module.css';

export const InfoHeader = (props) => {
  const { image, name, rarity } = props;

  return (
    <figure className={styles.infoHeader}>
      <div className={styles.imageWrapper} style={{ '--color': rarity.color }}>
        {image ? (
          <img alt={name} src={image} />
        ) : (
          <div className={styles.imagePlaceHolder}>
            <CiImageOn className={`text-[var(--text-muted)] text-3xl`} />
          </div>
        )}
      </div>

      <h2 className={styles.itemName}>{name}</h2>
    </figure>
  );
};