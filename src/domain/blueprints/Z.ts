import { ShapeType } from ".";
import { Color } from "../Color";

export const Z: ShapeType = {
  color: Color.BLUE,
  rotations: [
    [
      [-1, 0],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [0, -1],
      [0, 0],
      [-1, 0],
      [-1, 1],
    ],
  ],
};
