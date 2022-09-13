import React from 'react';
import styles from './index.less';
interface DemoBlockProps {
  gird?: boolean;
  title?: string;
  children?: React.ReactNode;
}
export const DemoBlock = (props: DemoBlockProps) => {
  const { title = '', gird } = props;
  return (
    <div className={styles.demobox}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.inner} ${gird ? styles.gird : ''}`}>{props.children}</div>
    </div>
  );
};
