import { useState, useEffect } from "react";
import axios from "axios";

export const useInput = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);

  const bind = {
    value: value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
  return [value, bind];
};
