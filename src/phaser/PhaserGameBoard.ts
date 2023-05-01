import { PhaserBoard } from "./PhaserBoard";
import GameScene from "./scenes/GameScene";

export const COLS = 10; // ?
export const ROWS = 20;

export class PhaserGameBoard extends PhaserBoard {
  constructor(public scene: GameScene, public x: number, public y: number) {
    super(scene, x, y, COLS, ROWS);
  }
}
