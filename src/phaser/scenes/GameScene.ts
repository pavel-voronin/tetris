// domain

import { ShapeGenerator } from "../../domain/ShapeGenerator";
import { Tetris } from "../../domain/Tetris";
import { Cell } from "../../domain/Cell";
import { TetrisState } from "../../domain/TetrisState";

// Phaser

import { BLOCK_SIZE } from "../PhaserBlock";
import { Controls } from "../ui/Controls";
import { COLS, PhaserGameBoard, ROWS } from "../PhaserGameBoard";
import { PhaserHoldShape } from "../PhaserHoldShape";
import { PhaserNextShape } from "../PhaserNextShape";
import { UI } from "../ui/UI";

export default class GameScene extends Phaser.Scene {
  tetris = new Tetris();

  constructor() {
    super({ key: "game" });
  }

  create() {
    // UI
    const ui = new UI(this, 0, 0);

    // Tetris
    this.tetris.on("toGameOver", (score: number) => {
      this.scene.start("gameover", { score });
    });
    this.tetris.on("toPaused", () => {
      Controls.onlyP(this);
      ui.showPauseLabel();
    });
    this.tetris.on("toPlaying", () => {
      Controls.all(this);
      ui.hidePauseLabel();
    });

    // Shape generator
    const shapeGenerator = new ShapeGenerator();

    // Next shape
    const nextShape = this.add.existing(
      new PhaserNextShape(
        this,
        (this.sys.canvas.width - BLOCK_SIZE * COLS) / 2 +
          COLS * BLOCK_SIZE +
          BLOCK_SIZE,
        (this.sys.canvas.height - BLOCK_SIZE * ROWS) / 2
      )
    );

    this.tetris.nextShape.on("addBlock", (cell: Cell) => {
      const block = nextShape.addBlock(cell.getCoords(), cell.getColor());

      cell.on("changeColor", (color: number) => {
        block.changeColor(color);
      });
    });
    this.tetris.nextShape.init();
    this.tetris.nextShape.link(shapeGenerator);

    // Hold shape container
    const holdShape = this.add.existing(
      new PhaserHoldShape(
        this,
        (this.sys.canvas.width - BLOCK_SIZE * COLS) / 2 +
          COLS * BLOCK_SIZE +
          BLOCK_SIZE,
        (this.sys.canvas.height - BLOCK_SIZE * ROWS) / 2 + 100
      )
    );

    this.tetris.holdShape.on("addBlock", (cell: Cell) => {
      const block = holdShape.addBlock(cell.getCoords(), cell.getColor());

      cell.on("changeColor", (color: number) => {
        block.changeColor(color);
      });
    });
    this.tetris.holdShape.init();
    this.tetris.holdShape.link(this.tetris.nextShape);

    // Game Board
    const gameBoard = this.add.existing(
      new PhaserGameBoard(
        this,
        (this.sys.canvas.width - BLOCK_SIZE * COLS) / 2,
        (this.sys.canvas.height - BLOCK_SIZE * ROWS) / 2
      )
    );

    this.tetris.gameBoard.on("addBlock", (cell: Cell) => {
      const block = gameBoard.addBlock(cell.getCoords(), cell.getColor());

      cell.on("changeColor", (color: number) => {
        block.changeColor(color);
      });
    });
    this.tetris.gameBoard.init();
    this.tetris.gameBoard.link(this.tetris.nextShape);

    this.tetris.state.to(TetrisState.PLAYING);

    // UI
    this.add.existing(ui);
  }

  update(time: number) {
    this.tetris.step(time);
  }
}
