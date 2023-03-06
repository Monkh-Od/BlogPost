import { useState } from "react";

export function useInput() {
  const [value, setValue] = useState("");

  const bind = {
    value: value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
  return [value, bind];
}
