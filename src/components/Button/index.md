---
nav:
  title: 组件
  path: /components
group:
  title: Button
  order: 1
---

## Button

代码演示:

```tsx
/**
 * compact: true
 */
import React from 'react';
import { Button } from 'indigo-ui';
import { DemoBlock } from 'demoUtiles';

export default () => (
  <>
    <DemoBlock title="按钮类型">
      <Button>Button</Button>
      <Button type="default">Button</Button>
      <Button type="link">Button</Button>
    </DemoBlock>
    <DemoBlock title="按钮大小">
      <Button size="large">Button</Button>
      <Button size="middle">Button</Button>
      <Button size="small">Button</Button>
    </DemoBlock>
    <DemoBlock title="禁用状态">
      <Button disabled>Button</Button>
      <Button type="default" disabled>
        Button
      </Button>
      <Button type="link" disabled>
        Button
      </Button>
    </DemoBlock>
    <DemoBlock title="块级按钮">
      <Button block>Button</Button>
    </DemoBlock>
  </>
);
```

## API

| 属性名   | 说明           | 类型                            | 默认值    |
| -------- | -------------- | ------------------------------- | --------- |
| type     | 设置按钮类型   | `primary` ｜ `default` ｜`link` | `primary` |
| size     | 设置按钮大小   | `large` ｜ `middle` ｜`small`   | `middle`  |
| disabled | 是否禁用       | `boolean`                       | `false`   |
| block    | 是否是块级元素 | `boolean`                       | `false`   |
