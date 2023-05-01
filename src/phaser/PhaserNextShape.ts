import { PhaserBoard } from "./PhaserBoard";
import GameScene from "./scenes/GameScene";

const COLS = 5;
const ROWS = 5;

export class PhaserNextShape extends PhaserBoard {
  constructor(public scene: GameScene, x: number, y: number) {
    super(scene, x, y, COLS, ROWS);
  }
}
