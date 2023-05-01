import { Button } from "./Button";

export class MenuButton extends Button {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string | string[],
    gotoScene: string
  ) {
    super(scene, x, y, text, 32, "#0f0", "#ff0", "#0ff", () => {
      scene.scene.start(gotoScene);
    });
  }
}
