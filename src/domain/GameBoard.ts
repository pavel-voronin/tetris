import { Shape } from "./Shape";
import { ShapeConsumer } from "./contracts/ShapeConsumer";
import { ShapeProvider } from "./contracts/ShapeProvider";
import { Color } from "./Color";
import { Board } from "./Board";

const COLS = 10;
const ROWS = 20;

export class GameBoard extends Board implements ShapeConsumer {
  movingShape?: Shape;
  movingPoint: [number, number] = [0, 0];
  provider?: ShapeProvider;

  constructor() {
    super(COLS, ROWS);
  }

  link(provider: ShapeProvider): void {
    this.provider = provider;
    this.spawn();
  }

  canGo(shape: Shape, dx: number, dy: number) {
    for (let [x, y] of shape.getCells()) {
      x += dx;
      y += dy;

      if (!this.cells[y] || !this.cells[y][x] || !this.cells[y][x].empty()) {
        return false;
      }
    }

    return true;
  }

  chooseSpawnPosition() {
    const x = 4;
    const y = 1;

    return [x, y];
  }

  spawn() {
    if (!this.provider) {
      return false;
    }

    const shape = this.provider.provide();
    const [x, y] = this.chooseSpawnPosition();

    if (this.canGo(shape, x, y)) {
      this.movingPoint = [x, y];
      this.movingShape = shape;
      this.movingShape.render(this, x, y);

      return true;
    }

    return false;
  }

  move(dx: number, dy: number) {
    if (!this.movingShape) {
      return false;
    }

    const color = this.movingShape.color;
    this.movingShape.color = Color.NONE;
    this.movingShape.render(this, ...this.movingPoint);

    if (
      !this.canGo(
        this.movingShape,
        this.movingPoint[0] + dx,
        this.movingPoint[1] + dy
      )
    ) {
      this.movingShape.color = color;
      this.movingShape.render(this, ...this.movingPoint);

      return false;
    }

    this.movingPoint[0] += dx;
    this.movingPoint[1] += dy;
    this.movingShape.color = color;
    this.movingShape.render(this, ...this.movingPoint);

    return true;
  }

  rotate() {
    if (!this.movingShape) {
      return false;
    }

    const firstMovingPoint = [...this.movingPoint];

    const color = this.movingShape.color;
    this.movingShape.color = Color.NONE;
    this.movingShape.render(this, ...this.movingPoint);

    this.movingShape.rotate();

    let success = false;

    if (this.canGo(this.movingShape, ...this.movingPoint)) {
      success = true;
    } else {
      this.movingPoint[0]--;

      if (this.canGo(this.movingShape, ...this.movingPoint)) {
        success = true;
      } else {
        this.movingPoint[0]--;

        if (this.canGo(this.movingShape, ...this.movingPoint)) {
          success = true;
        } else {
          this.movingPoint[0] += 3;

          if (this.canGo(this.movingShape, ...this.movingPoint)) {
            success = true;
          }
        }
      }
    }

    if (!success) {
      this.movingShape.color = color;
      this.movingPoint = [firstMovingPoint[0], firstMovingPoint[1]];
      this.movingShape.rotateBack();
      this.movingShape.render(this, ...this.movingPoint);

      return false;
    }

    this.movingShape.color = color;
    this.movingShape.render(this, ...this.movingPoint);

    return true;
  }

  clearLines(): number {
    if (!this.cells) {
      return 0;
    }

    for (let y = this.rows - 1; y >= 0; y--) {
      if (this.cells[y].every((cell) => !cell.empty())) {
        for (let yy = y; yy > 0; yy--) {
          for (let x = 0; x < this.cols; x++) {
            this.cells[yy][x].changeColor(this.cells[yy - 1][x].getColor());
          }
        }

        return this.clearLines() + 1;
      }
    }

    return 0;
  }
}
