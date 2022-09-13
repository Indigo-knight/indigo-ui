import React, { useState } from 'react';
import './index.less';
import classNames from 'classnames';
const classPrefix = `idg-switch`;

interface SwitchProps {
  checked?: string;
  size?: 'default' | 'primary' | 'link';
  onChange?: (checked: boolean) => void | Promise<void>;
}
export default (props: SwitchProps) => {
  const { checked = false, size = 'default', onChange, ...otherset } = props;
  const [state, setState] = useState(checked);
  const outClassName = classNames({
    [`${classPrefix}-outbox ${classPrefix}-checked`]: state,
    [`${classPrefix}-outbox ${classPrefix}-unchecked`]: !state,
  });
  const inClassName = classNames({
    [`${classPrefix}-innerbox ${classPrefix}-checked`]: state,
    [`${classPrefix}-innerbox ${classPrefix}-unchecked`]: !state,
  });
  const handelClick = () => {
    if (onChange) {
      onChange(Boolean(!state));
    }
    setState(!state);
  };
  return (
    <div {...otherset} className={outClassName} onClick={handelClick}>
      <div className={inClassName} />
    </div>
  );
};
