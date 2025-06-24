type Props = {
  username?: string;
  x: number;
  y: number;
};

export const Cursor = ({ username, x, y }: Props) => {
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg">
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
          {username}
        </div>
      </div>
    </div>
  );
};
