---
nav:
  title: 组件
  path: /components
group:
  title: Switch
  order: 2
---

## Switch

代码演示:

```tsx
/**
 * compact: true
 */
import React, { useState } from 'react';
import { Switch } from 'indigo-ui';
import { DemoBlock } from 'demoUtiles';

export default () => {
  const [ochecked, setChecked] = useState(false);
  return (
    <>
      <DemoBlock title="基础用法">
        <Switch />
      </DemoBlock>
      <DemoBlock title="受控组件">
        <Switch
          checked={ochecked}
          onChange={(checked) => {
            setChecked(checked);
          }}
        />
      </DemoBlock>
      <DemoBlock title="有默认值">
        <Switch checked />
      </DemoBlock>
      <DemoBlock title="禁用状态" type="switch">
        <Switch disabled />
        <Switch disabled checked />
      </DemoBlock>
    </>
  );
};
```

## API

| 属性名   | 说明             | 类型                     | 默认值  |
| -------- | ---------------- | ------------------------ | ------- |
| checked  | 指定当前是否打开 | `boolean`                | `false` |
| disabled | 禁用状态         | `boolean`                | `false` |
| onChange | 变化时回调函数   | `(val: boolean) => void` | `-`     |
