import React from 'react';
import styles from './index.css';

interface ButtontProps {
  type?: string;
  children?: any;
}
export default (props: ButtontProps) => {
  const { children, type = 'primary' } = props;
  return <button className={`${styles.button} ${styles[type]}`}> {children}</button>;
};
