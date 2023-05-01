import { PhaserBlock } from "./PhaserBlock";

export class PhaserBoard extends Phaser.GameObjects.Container {
  cells?: PhaserBlock[][];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    public cols: number,
    public rows: number
  ) {
    super(scene, x, y);
  }

  addBlock(coords: [number, number], color: number) {
    const block = new PhaserBlock(this.scene, ...coords, color);

    this.add(block);

    return block;
  }
}
