import { ComponentProps, FC } from 'react';

import styles from './hashAnchor.module.scss';

const HashAnchor: FC<ComponentProps<'div'>> = ({ id }) => {
  return <div id={id} className={styles.hashAnchor} />;
};

export default HashAnchor;
