import React from 'react';
import styles from './index.less';
interface DemoBlockProps {
  type?: boolean;
  title?: string;
  children?: React.ReactNode;
}
export const DemoBlock = (props: DemoBlockProps) => {
  const { title = '', type } = props;
  return (
    <div className={styles.demobox}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.inner} ${type ? styles['flex_' + type] : ''}`}>
        {props.children}
      </div>
    </div>
  );
};
