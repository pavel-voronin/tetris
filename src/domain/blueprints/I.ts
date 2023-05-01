import { ShapeType } from ".";
import { Color } from "../Color";

export const I: ShapeType = {
  color: Color.RED,
  rotations: [
    [
      [0, -1],
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  ],
};
