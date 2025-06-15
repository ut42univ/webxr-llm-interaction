import { createXRStore } from "@react-three/xr";

export const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});
