import { ShapeType } from ".";
import { Color } from "../Color";

export const J: ShapeType = {
  color: Color.YELLOW,
  rotations: [
    [
      [1, -1],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [-1, -1],
    ],
    [
      [-1, 1],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  ],
};
