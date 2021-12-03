import { useState } from "react";

const useToggle = (initialValue: boolean): [boolean, (() => void)] => {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(old => !old);

  return [state, toggleState]
}

export default useToggle;