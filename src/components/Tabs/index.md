---
nav:
  title: 组件
  path: /components
group:
  title: Tabs
  order: 3
---

## Tabs

代码演示:

```tsx
/**
 * compact: true
 */
import React, { useState } from 'react';
import { Tabs } from 'indigo-ui';
import { DemoBlock } from 'demoUtiles';

export default () => {
  const items = [
    { label: 'Products', key: '1' },
    { label: 'About Us', key: '2' },
  ];
  const [activeKey, setActiveKey] = useState(false);
  return (
    <>
      <DemoBlock title="基础用法">
        <Tabs items={items} />
      </DemoBlock>
    </>
  );
};
```

## API

| 属性名    | 说明                    | 类型                                 | 默认值 |
| --------- | ----------------------- | ------------------------------------ | ------ |
| activeKey | 当前激活 tab 面板的 key | `string` ｜ `null`                   | `null` |
| items     | tabs 子内容 `必填`      | `array[{label: string,key: string}]` | `[]`   |
| onChange  | 切换面板的回调          | `(key: string) => void`              | `-`    |
