import React from 'react';
import styles from './index.less';

interface ButtontProps {
  children?: any;
}
export default (props: ButtontProps) => {
  const { children } = props;
  return <button className={styles.button}>{children}</button>;
};
