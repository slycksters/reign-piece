import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = (props) => {
  const {
    borderColor,
    className,
    children,
    text,
    variant = 'styled_borders',
  } = props;
  const withBorderStyle = variant === 'styled_borders';

  return (
    <button
      className={clsx(
        withBorderStyle ? styles.styledBorders : styles.defaultButton,
        className,
      )}
      style={{ '--border-color': borderColor }}
    >
      {withBorderStyle && (
        <>
          <div className={styles.topBorder}></div>
          <div className={styles.bottomBorder}></div>
        </>
      )}

      {children ? children : <span className={styles.text}>{text}</span>}
    </button>
  );
};
