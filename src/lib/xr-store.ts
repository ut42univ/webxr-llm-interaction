import { createXRStore } from "@react-three/xr";

export const store = createXRStore({
  hand: { teleportPointer: false },
  controller: { teleportPointer: true },
});
