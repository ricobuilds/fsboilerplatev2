import { useState } from "react";
export const useToggleHook = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
    localStorage.setItem("isDarkMode", value.toString());
  };

  return [value, toggle];
};
