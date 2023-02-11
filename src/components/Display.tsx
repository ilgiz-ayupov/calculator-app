import React from "react";

// Hooks
import { useAppSelector } from "hooks";

// Selectors
import { selectExample } from "store/example-slice";

const Display: React.FC = () => {
  const example = useAppSelector(selectExample);

  return (
    <div className="display">
      <input className="display-input" type="text" readOnly value={example} />
    </div>
  );
};

export default Display;
