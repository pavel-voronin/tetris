import { BLUEPRINTS } from "./blueprints";
import { Color } from "./Color";
import { Board } from "./Board";

export class Shape {
  constructor(
    public rotations: [number, number][][],
    public color: Color,
    public angle = 0
  ) {}

  static random() {
    const shapes = Object.keys(BLUEPRINTS);
    const name = shapes[Math.floor(Math.random() * shapes.length)];
    const blueprint = BLUEPRINTS[name];
    const angle = Math.floor(Math.random() * blueprint.rotations.length);

    return new Shape(blueprint.rotations, blueprint.color, angle);
  }

  getCells() {
    return this.rotations[this.angle];
  }

  render(board: Board, x: number, y: number) {
    if (!board.cells) {
      return;
    }

    for (const [dx, dy] of this.getCells()) {
      board.cells[y + dy][x + dx].changeColor(this.color);
    }
  }

  rotate(direction = 1) {
    this.angle =
      (this.angle + direction + this.rotations.length) % this.rotations.length;
  }

  rotateBack() {
    this.rotate(-1);
  }
}
