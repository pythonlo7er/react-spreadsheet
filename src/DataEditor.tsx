import * as React from "react";
import * as Types from "./types";
import { moveCursorToEnd } from "./util";

type Value = string | number;

type Cell = Types.CellBase<Value>;

/** The default Spreadsheet DataEditor component */
const DataEditor: React.FC<Types.DataEditorProps<Cell>> = ({
  onChange,
  cell = {
    value: "",
  },
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...cell, value: e.target.value });
    },
    [onChange, cell]
  );

  React.useEffect(() => {
    if (inputRef.current) {
      moveCursorToEnd(inputRef.current);
    }
  }, [inputRef]);

  const value = cell?.value || "";

  return (
    <div className="Spreadsheet__data-editor">
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        value={value}
        autoFocus
      />
    </div>
  );
};

export default DataEditor;