import { ShapeType } from ".";
import { Color } from "../Color";

export const S: ShapeType = {
  color: Color.MAGENTA,
  rotations: [
    [
      [-1, 0],
      [0, 0],
      [0, -1],
      [1, -1],
    ],
    [
      [0, -1],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  ],
};
