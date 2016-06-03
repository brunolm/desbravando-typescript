export enum Direction {
  Up,
  Down,
  Left,
  Right
}

export enum FileFlags {
  ReadOnly = 1 << 1,
  Hidden = 1 << 2,
  Compressed = 1 << 3,
  System = 1 << 4,
}
