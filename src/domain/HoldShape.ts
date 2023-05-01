import { Shape } from "./Shape";
import { ShapeConsumer } from "./contracts/ShapeConsumer";
import { ShapeProvider } from "./contracts/ShapeProvider";
import { Board } from "./Board";

const COLS = 5;
const ROWS = 5;

export class HoldShape extends Board implements ShapeConsumer {
  shape?: Shape;
  provider?: ShapeProvider;

  constructor() {
    super(COLS, ROWS);
  }

  link(provider: ShapeProvider): void {
    this.provider = provider;
  }

  swap() {
    if (!this.provider) {
      return;
    }

    this.clear();
    this.shape = this.provider.provide(this.shape);
    this.shape.render(this, 2, 2);
  }
}
