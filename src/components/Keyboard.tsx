import React from "react";

// Types
import type { KeyNumber, KeyOperator, KeyAction } from "types";

// Hooks
import { useAppDispatch } from "hooks";

// Actions
import {
  addNumber,
  addOperator,
  clearExample,
  deleteLastChar,
  calcResult,
} from "store/example-slice";

// Components
import Key from "./Key";

const Keyboard: React.FC = () => {
  const dispatch = useAppDispatch();

  // Handlers
  const numberClickHandler = (number: KeyNumber) => {
    dispatch(addNumber(number));
  };

  const operatorClickHandler = (operator: KeyOperator) => {
    dispatch(addOperator(operator));
  };

  const actionClickHandler = (action: KeyAction) => {
    switch (action) {
      case "DEL":
        dispatch(deleteLastChar());
        break;
      case "RESET":
        dispatch(clearExample());
        break;
      case "RESULT":
        dispatch(calcResult());
        break;
    }
  };

  return (
    <div className="keypad">
      <ul className="grid h-full grid-rows-5 gap-y-5">
        <li className="grid grid-cols-4 gap-x-5">
        <Key
            onClick={() => numberClickHandler("7")}
            text="7"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("8")}
            text="8"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("9")}
            text="9"
            variant="base"
          />
          <Key
            onClick={() => actionClickHandler("DEL")}
            text="DEL"
            variant="action"
          />
        </li>

        <li className="grid grid-cols-4 gap-x-5">
          <Key
            onClick={() => numberClickHandler("4")}
            text="4"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("5")}
            text="5"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("6")}
            text="6"
            variant="base"
          />
          <Key
            onClick={() => operatorClickHandler("+")}
            text="+"
            variant="base"
          />
        </li>

        <li className="grid grid-cols-4 gap-x-5">
          <Key
            onClick={() => numberClickHandler("1")}
            text="1"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("2")}
            text="2"
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("3")}
            text="3"
            variant="base"
          />
          <Key
            onClick={() => operatorClickHandler("-")}
            text="-"
            variant="base"
          />
        </li>

        <li className="grid grid-cols-4 gap-x-5">
          <Key
            onClick={() => numberClickHandler(".")}
            text="."
            variant="base"
          />
          <Key
            onClick={() => numberClickHandler("0")}
            text="0"
            variant="base"
          />
          <Key
            onClick={() => operatorClickHandler("/")}
            text="/"
            variant="base"
          />
          <Key
            onClick={() => operatorClickHandler("X")}
            text="X"
            variant="base"
          />
        </li>

        <li className="grid grid-cols-2 gap-x-5">
          <Key
            onClick={() => actionClickHandler("RESET")}
            text="RESET"
            variant="action"
          />
          <Key
            onClick={() => actionClickHandler("RESULT")}
            text="="
            variant="result"
          />
        </li>
      </ul>
    </div>
  );
};

export default Keyboard;
