import { Shape } from "../Shape";

export interface ShapeProvider {
  provide(shape?: Shape): Shape;
}
