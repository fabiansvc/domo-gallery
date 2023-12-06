'use strict'

import { useMemo } from "react";

const useMovements = () => {
  const MOVEMENTS = {
    forward: "forward",
    backward: "backward",
    leftward: "leftward",
    rightward: "rightward",
  };

  const map = useMemo(
    () => {
        return [
          { name: MOVEMENTS.forward, keys: ["ArrowUp", "KeyW"] },
          { name: MOVEMENTS.backward, keys: ["ArrowDown", "KeyS"] },
          { name: MOVEMENTS.leftward, keys: ["ArrowLeft", "KeyA"] },
          { name: MOVEMENTS.rightward, keys: ["ArrowRight", "KeyD"] }
        ]
    },);

  return map;
};

export default useMovements;