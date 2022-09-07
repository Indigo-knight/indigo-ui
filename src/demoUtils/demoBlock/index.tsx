import React from 'react';
import styles from './index.less';
interface DemoBlockProps {
  title?: string;
  children?: React.ReactNode;
}
export const DemoBlock = (props: DemoBlockProps) => {
  const { title = '' } = props;
  return (
    <div className={styles.demobox}>
      <div className={styles.title}>{title}</div>
      <div className={styles.inner}>{props.children}</div>
    </div>
  );
};
