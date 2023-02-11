import React from "react";
import cn from "classnames";

const Header: React.FC = () => {
  const [theme, setTheme] = React.useState("1");

  // Handlers
  const changeThemeHandler = (theme: string) => {
    setTheme(theme);
  };

  // Effects
  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="flex items-end justify-between">
        <h1 className="text-xl">calc</h1>

        <div className="flex items-end gap-x-5">
          <span className="text-sm leading-none">THEME</span>
          <div>
            <ul className="flex text-xs">
              <li>
                <button
                  className="px-2"
                  onClick={() => changeThemeHandler("1")}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className="px-2"
                  onClick={() => changeThemeHandler("2")}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className="px-2"
                  onClick={() => changeThemeHandler("3")}
                >
                  3
                </button>
              </li>
            </ul>

            <div className="relative h-5 w-full rounded-full bg-[var(--keypad-bg)] p-1">
              <span
                className={cn(
                  "absolute top-1 bottom-1 h-3 w-3 rounded-full bg-[var(--key-result-bg)] transition-all",
                  {
                    "left-1": theme === "1",
                    "left-6": theme === "2",
                    "left-12": theme === "3",
                  }
                )}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
