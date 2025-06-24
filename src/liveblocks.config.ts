declare global {
  interface Liveblocks {
    Presence: {
      username: string;
      cursor: {
        x: number;
        y: number;
      } | null;
    };
  }
}

export {};
