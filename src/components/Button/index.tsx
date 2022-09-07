import React from 'react';
import classNames from 'classnames';
import './index.less';
const classPrefix = `idg-button`;
interface ButtontProps {
  type?: 'default' | 'primary' | 'link';
  children?: React.ReactNode;
  size?: 'middle' | 'large' | 'small';
  block?: boolean;
}
export default (props: ButtontProps) => {
  const { children, type = 'primary', size = 'middle', block = false, ...otherset } = props;
  const className = classNames(classPrefix, {
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-primary`]: type === 'primary',
    [`${classPrefix}-default`]: type === 'default',
    [`${classPrefix}-link`]: type === 'link',
    [`${classPrefix}-middle`]: size === 'middle',
    [`${classPrefix}-large`]: size === 'large',
    [`${classPrefix}-small`]: size === 'small',
  });
  return (
    <button className={className} {...otherset}>
      {' '}
      {children}
    </button>
  );
};
