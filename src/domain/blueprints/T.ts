import { ShapeType } from ".";
import { Color } from "../Color";

export const T: ShapeType = {
  color: Color.CYAN,
  rotations: [
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    [
      [0, -1],
      [0, 0],
      [0, 1],
      [1, 0],
    ],
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [0, -1],
    ],
    [
      [0, -1],
      [0, 0],
      [0, 1],
      [-1, 0],
    ],
  ],
};
