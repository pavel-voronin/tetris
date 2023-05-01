export class Label extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text = "",
    options = {}
  ) {
    super(
      scene,
      x,
      y,
      text,
      Object.assign({ color: "#0f0", fontSize: "14px" }, options)
    );
  }
}
