import { Label } from "./Label";
import { MenuButton } from "./MenuButton";
import GameScene from "../scenes/GameScene";

export class UI extends Phaser.GameObjects.Container {
  levelLabel: Label;
  linesLabel: Label;
  scoreLabel: Label;
  pauseLabel: Label;

  constructor(public scene: GameScene, x: number, y: number) {
    super(scene, x, y);

    this.add(new MenuButton(this.scene, 48, 16, "Back", "main-menu"));

    this.levelLabel = new Label(this.scene, 10, 36);
    this.linesLabel = new Label(this.scene, 10, 52);
    this.scoreLabel = new Label(this.scene, 10, 68);
    this.pauseLabel = new Label(
      this.scene,
      this.scene.sys.canvas.width / 2,
      this.scene.sys.canvas.height / 2,
      "Pause",
      { fontSize: "100px" }
    )
      .setOrigin(0.5)
      .setVisible(false);

    this.add([
      this.levelLabel,
      this.linesLabel,
      this.scoreLabel,
      this.pauseLabel,
    ]);
  }

  preUpdate() {
    this.levelLabel.setText(`Level: ${this.scene.tetris.score.getLevel()}`);
    this.linesLabel.setText(`Lines: ${this.scene.tetris.score.getLines()}`);
    this.scoreLabel.setText(`Score: ${this.scene.tetris.score.getScore()}`);
  }

  showPauseLabel() {
    this.pauseLabel!.setVisible(true);
  }

  hidePauseLabel() {
    this.pauseLabel!.setVisible(false);
  }
}
