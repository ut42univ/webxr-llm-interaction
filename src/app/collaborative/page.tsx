import { CollaborativeApp } from "@/components/collaboration/CollaborativeApp";
import { Room } from "@/components/collaboration/Room";
import { NextPage } from "next";

const LiveblocksDemoPage: NextPage = () => {
  return (
    <Room roomId="cursor-collaboration">
      <CollaborativeApp />
    </Room>
  );
};

export default LiveblocksDemoPage;
