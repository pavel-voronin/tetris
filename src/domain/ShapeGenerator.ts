import { Shape } from "./Shape";
import { ShapeProvider } from "./contracts/ShapeProvider";

export class ShapeGenerator implements ShapeProvider {
  provide(): Shape {
    return Shape.random();
  }
}
