import { VREntry } from "@/components/ui/VREntry";
import { MultiplayerScene } from "@/components/xr/scenes/MultiplayerScene/MultiplayerScene";
import { NextPage } from "next";

const MultiplayerScenePage: NextPage = () => {
  return (
    <div>
      <VREntry />
      <MultiplayerScene />
    </div>
  );
};

export default MultiplayerScenePage;
