export const BLOCK_SIZE = 16;
export const STROKE_WIDTH = 1;
export const STROKE_COLOR = 0xd0d0d0;

export class PhaserBlock extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, x: number, y: number, public color: number) {
    super(scene, x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, color);

    this.setStrokeStyle(STROKE_WIDTH, STROKE_COLOR);

    this.setOrigin(0);
  }

  changeColor(color: number) {
    this.color = color;
    this.fillColor = color;
  }
}
