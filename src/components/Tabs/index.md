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
  const items1 = [
    { label: 'Products', key: '1' },
    { label: 'About Us', key: '2' },
  ];
  const items2 = [
    { label: 'Products', key: '1', children: 'aaa' },
    { label: 'About Us', key: '2', children: 'bbb' },
  ];
  const [activeKey, setActiveKey] = useState(false);
  return (
    <>
      <DemoBlock title="基础用法">
        <Tabs items={items1} />
      </DemoBlock>
      <DemoBlock title="基础用法">
        <Tabs items={items2} />
      </DemoBlock>
    </>
  );
};
```

## Tabs

| 属性名    | 说明                                     | 类型                    | 默认值 |
| --------- | ---------------------------------------- | ----------------------- | ------ |
| activeKey | 当前激活 tab 面板的 key `默认选中第一项` | `string` ｜ `null`      | `null` |
| items     | tabs 子内容 `必填`                       | `array`                 | `[]`   |
| onChange  | 切换面板的回调                           | `(key: string) => void` | `-`    |

## Tabs.items

| 属性名   | 说明        | 类型                  | 默认值 |
| -------- | ----------- | --------------------- | ------ |
| key      | key`必填`   | `string`              | `-`    |
| label    | 标题 `必填` | `string`              | `-`    |
| children | 内容        | `string` ｜ `Element` | `-`    |
