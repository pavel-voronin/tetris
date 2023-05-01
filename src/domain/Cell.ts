import EventEmitter from "events";
import { Color } from "./Color";

export class Cell extends EventEmitter {
  constructor(
    protected x: number,
    protected y: number,
    protected color: Color
  ) {
    super();
  }

  empty() {
    return this.color === Color.NONE;
  }

  changeColor(color: Color) {
    this.color = color;

    this.emit("changeColor", this.getColor());
  }

  getColor() {
    return this.color;
  }

  getCoords(): [number, number] {
    return [this.x, this.y];
  }
}
