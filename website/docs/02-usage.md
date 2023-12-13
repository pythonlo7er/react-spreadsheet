---
id: usage
title: Usage
---

# Usage

## Simple

The Spreadsheet component requires the `data` property: an array of arrays with objects that has the `value` key. Changes made in the Spreadsheet will not affect the passed data array as in React props values should not be mutated.

:::caution
If `data` prop value is changed the component will discard any changes made by the user. If you want to make changes to `data` and incorporate the user's changes see [Controlled](#Controlled).
:::

```javascript
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return <Spreadsheet data={data} />;
};
```

## Custom Columns and Rows

The Spreadsheet component accepts the `columnLabels` or `rowLabels` props, both of which accept arrays. If no `columnLabels` are supplied, alphabetical labels are used, and row index labels are used if no `rowLabels` are passed.

```javascript
import Spreadsheet from "react-spreadsheet";

const App = () => {
  let col = ["Flavour", "Food"];
  let row = ["Item 1", "Item 2"];
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return <Spreadsheet data={data} columnLabels={col} rowLabels={row} />;
};
```

## Readonly Cells

Any particular Spreadsheet cell can be set to readonly by just specifying `readOnly:true` in the cell along with the value.

```javascript
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate", readOnly: true }],
    [{ value: "Strawberry" }, { value: "Cookies", readOnly: true }],
  ];
  return <Spreadsheet data={data} />;
};
```

## Controlled

The Spreadsheet component accepts `onChange` prop that is called every time one of the Spreadsheet's cell is changed by the user. You can use it to save the modified data and to react to changes (e.g. validating the modified data, further modify it, persist it).

```javascript

import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

export default function App2() {
    const [data, setData] = useState([
        [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "🍫" }],
        [{ value: "Strawberry" }, { value: "Cookies" }, { value: "🍪" }],
    ]);

    const handelOnchange = (e) => {
        const d = e.map((row) => [...row])
        for (let i = 0; i < 2; i++) {
            const string = d[i][1]
            console.log(string);
            if (string.value === 'Chocolate') {
                d[i][2] = { value: "🍫" }
            }
            else if (string.value === "Cookies") {
                d[i][2] = { value: "🍪" }
            }
            else if (string.value === "Pizza") {
                d[i][2] = { value: "🍕" }
            }
            else {
                d[i][2] = { value: "❓" }
            }
        }
        setData(d)

    }
    return <Spreadsheet data={data} onChange={handelOnchange} />;

};
```
