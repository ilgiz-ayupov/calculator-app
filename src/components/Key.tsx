import React from "react";
import cn from "classnames";

interface KeyProps {
  text: string;
  variant: "base" | "action" | "result";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Key: React.FC<KeyProps> = ({ text, variant, onClick }) => {
  return (
    <button
      className={cn(
        "key",
        {
          "key-base": variant === "base",
        },
        {
          "key-action": variant === "action",
        },
        {
          "key-result": variant === "result",
        }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Key;
