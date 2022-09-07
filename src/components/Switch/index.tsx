import React from 'react';
import './index.less';
const classPrefix = `idg-switch`;

interface SwitchProps {
  checked?: string;
  size?: 'default' | 'primary' | 'link';
}
export default (props: SwitchProps) => {
  const { checked, size = 'default', ...otherset } = props;

  return (
    <div {...otherset}>
      <div />
    </div>
  );
};
