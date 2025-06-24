import { CollaborativeApp } from "@/components/collaboration/CollaborativeApp";
import { Room } from "@/components/collaboration/Room";

export default function Page() {
  return (
    <Room roomId="cursor-collaboration">
      <CollaborativeApp />
    </Room>
  );
}
