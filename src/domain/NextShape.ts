import { Shape } from "./Shape";
import { ShapeConsumer } from "./contracts/ShapeConsumer";
import { ShapeProvider } from "./contracts/ShapeProvider";
import { Board } from "./Board";

const COLS = 5;
const ROWS = 5;

export class NextShape extends Board implements ShapeProvider, ShapeConsumer {
  shape?: Shape;
  provider?: ShapeProvider;

  constructor() {
    super(COLS, ROWS);
  }

  link(provider: ShapeProvider): void {
    this.provider = provider;
    this.makeShape();
  }

  makeShape(shape?: Shape) {
    if (!this.provider) {
      return;
    }

    this.clear();
    if (shape) {
      this.shape = shape;
    } else {
      this.shape = this.provider.provide();
    }
    this.shape.render(this, 2, 2);
  }

  provide(shape?: Shape): Shape {
    const oldShape = this.shape!;
    this.makeShape(shape);
    return oldShape;
  }
}
