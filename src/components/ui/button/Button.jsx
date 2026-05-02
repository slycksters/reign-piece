import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export const Button = (props) => {
  const {
    borderColor,
    className,
    children,
    text,
    variant = 'styled_borders',
    to,
    ...rest
  } = props;
  const withBorderStyle = variant === 'styled_borders';

  const commonClass = clsx(
    withBorderStyle ? styles.styledBorders : styles.defaultButton,
    className,
  );

  const style = { '--border-color': borderColor };

  const content = (
    <>
      {withBorderStyle && (
        <>
          <div className={styles.topBorder}></div>
          <div className={styles.bottomBorder}></div>
        </>
      )}
      {children ? children : <span className={styles.text}>{text}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={clsx(commonClass, styles.linkButton)} style={style} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={commonClass} style={style} {...rest}>
      {content}
    </button>
  );
};