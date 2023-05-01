import EventEmitter from "events";
import { Color } from "./Color";
import { Cell } from "./Cell";

export class Board extends EventEmitter {
  cells!: Cell[][];

  constructor(public cols: number, public rows: number) {
    super();
  }

  init() {
    this.cells = Array.from({ length: this.rows }, (_, y: number) =>
      Array.from({ length: this.cols }, (_, x: number) => {
        const block = new Cell(x, y, Color.NONE);

        this.emit("addBlock", block);

        return block;
      })
    );
  }

  clear() {
    this.cells.forEach((row) => {
      row.forEach((block) => {
        block.changeColor(Color.NONE);
      });
    });
  }
}
