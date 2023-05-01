import { Color } from "../Color";
import { I } from "./I";
import { O } from "./O";
import { Z } from "./Z";
import { S } from "./S";
import { T } from "./T";
import { L } from "./L";
import { J } from "./J";

export type ShapeType = {
  color: Color;
  rotations: [number, number][][];
};

export const BLUEPRINTS: Record<string, ShapeType> = { I, O, Z, S, T, L, J };
