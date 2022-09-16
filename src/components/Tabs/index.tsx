import React, { useState } from 'react';
import './index.less';
import classNames from 'classnames';
const classPrefix = `idg-tabs`;

interface TabsProps {
  activeKey?: string;
  items: TabsItem[];
  onChange?: (activeKey: string) => void | Promise<void>;
}
interface TabsItem {
  label: string;
  key: string;
  children?: any;
}
export default (props: TabsProps) => {
  const { items = [], onChange } = props;
  const { activeKey = items[0].key } = props;
  const [activeValue, setActiveValue] = useState(activeKey || items[0].key);
  const [activeChild, setActiveChild] = useState(items[0]?.children);
  if (items.length === 0) {
    return;
  }
  const childClassName = (key: string) => {
    return classNames({
      [`${classPrefix}-child ${classPrefix}-checked`]: key === activeValue,
      [`${classPrefix}-child ${classPrefix}-unchecked`]: key !== activeValue,
    });
  };
  const handelClick = (item: TabsItem) => {
    setActiveValue(item.key);
    setActiveChild(item.children);
    if (onChange) {
      onChange(item.key);
    }
  };
  return (
    <div>
      <div className={`${classPrefix}-outbox`}>
        {items.map((i) => (
          <div
            key={i.key}
            className={childClassName(i.key)}
            onClick={() => {
              handelClick(i);
            }}
          >
            {i.label}
          </div>
        ))}
      </div>
      {activeChild ? <div className={`${classPrefix}-children`}>{activeChild}</div> : null}
    </div>
  );
};
